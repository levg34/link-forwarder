import { useSearchParams } from '@solidjs/router'
import axios from 'axios'
import { Match, Resource, Show, Switch, createResource, onMount } from 'solid-js'
import QrCode from '~/components/QrCode'

function Connected(props: { serverUuid: Resource<string | undefined> }) {
    return (
        <Switch fallback={<p>Connected with {props.serverUuid()}</p>}>
            <Match when={props.serverUuid.loading}>
                <p>Loading...</p>
            </Match>
            <Match when={props.serverUuid.error}>
                <p>Error: {props.serverUuid.error}</p>
            </Match>
        </Switch>
    )
}

export default function Connect(props: { uuid: string }) {
    const [searchParams] = useSearchParams()
    const uuid = searchParams.uuid

    onMount(async () => {
        if (!uuid) {
            const { data } = await axios.post('/api/' + props.uuid + '/init')
            console.log(data)
        }
    })

    const [serverUuid] = createResource(async (): Promise<string | undefined> => {
        if (!uuid) return
        const { data } = await axios.get('/api/' + uuid + '/connect')
        return data.connected
    })

    return (
        <Show when={!serverUuid()} fallback={<Connected serverUuid={serverUuid} />}>
            <h3>Scan this code to connect.</h3>
            <QrCode text={window.location.href + '?uuid=' + props.uuid} />
        </Show>
    )
}
