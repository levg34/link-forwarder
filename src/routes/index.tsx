// import "./index.css";

import { Show, createSignal, onMount } from 'solid-js'
import QrCode from '~/components/QrCode'
import Connect from '../components/Connect'

export default function Home() {
    const [text, setText] = createSignal<string>('')

    const uuid = crypto.randomUUID()

    return (
        <main>
            <h1>Link forwardinator 📡</h1>
            <div>
                <input
                    type="text"
                    value={text()}
                    oninput={(e) => {
                        setText(e.target.value)
                    }}
                    placeholder="Enter URL or text"
                />
            </div>
            <Show when={text()}>
                <QrCode text={text()} />
            </Show>
            <Connect uuid={uuid} />
        </main>
    )
}
