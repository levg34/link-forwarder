import { Show, createSignal } from 'solid-js'
import QrCode from '~/components/QrCode'
import Connect from '../components/Connect'
import Urls from '~/components/Urls'
import SendUrls from '~/components/SendUrl'

export default function Home() {
    const [text, setText] = createSignal<string>('')

    const uuid = sessionStorage.getItem('uuid') ?? crypto.randomUUID()

    if (!sessionStorage.getItem('uuid')) {
        sessionStorage.setItem('uuid', uuid)
    }

    return (
        <main>
            <h1>Link forwardinator 📡</h1>
            <SendUrls uuid={uuid} text={text()} setText={setText} />
            <Show when={text()} fallback={<Connect uuid={uuid} />}>
                <QrCode text={text()} />
            </Show>
            <Urls uuid={uuid} />
        </main>
    )
}
