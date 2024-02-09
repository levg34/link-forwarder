import { Show, createSignal } from 'solid-js'
import QrCode from '~/components/QrCode'
import Connect from '../components/Connect'
import Urls from '~/components/Urls'
import SendUrls from '~/components/SendUrl'

export default function Home() {
    const [text, setText] = createSignal<string>('')

    const uuid = crypto.randomUUID()

    return (
        <main>
            <h1>Link forwardinator 📡</h1>
            <SendUrls uuid={uuid} text={text()} setText={setText} />
            <Show when={text()}>
                <QrCode text={text()} />
            </Show>
            <Connect uuid={uuid} />
            <Urls uuid={uuid} />
        </main>
    )
}
