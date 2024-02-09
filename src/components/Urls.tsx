import { useSearchParams } from '@solidjs/router'
import axios from 'axios'
import { For, Match, Switch, createResource } from 'solid-js'
import Linkify from './Linkify'

export default function Urls(props: { uuid: string }) {
    const [searchParams] = useSearchParams()
    const uuid = searchParams.uuid

    const [urls, { refetch }] = createResource(async () => {
        const { data } = await axios.get<string[]>(`/api/${uuid ? uuid : props.uuid}/links`)
        return data
    })

    return (
        <div>
            <button onclick={refetch}>Reload</button>
            <Switch
                fallback={
                    <ol>
                        <For each={urls()}>
                            {(url) => (
                                <li>
                                    <Linkify text={url} />
                                </li>
                            )}
                        </For>
                    </ol>
                }
            >
                <Match when={urls.loading}>Loading...</Match>
                <Match when={urls.error}>Error: {urls.error}</Match>
            </Switch>
        </div>
    )
}
