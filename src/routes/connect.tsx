import { useSearchParams } from '@solidjs/router'
import { Show } from 'solid-js'
import QrCode from '~/components/QrCode'

export default function Connect(props: { uuid: string }) {
    const [searchParams] = useSearchParams()

    const uuid = searchParams.uuid

    return (
        <>
            <Show when={!uuid} fallback={<p>Connected with {uuid}</p>}>
                <h3>Scan this code to connect.</h3>
                <QrCode text={window.location.href + '?uuid=' + props.uuid} />
            </Show>
        </>
    )
}
