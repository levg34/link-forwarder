// import "./index.css";

import { Show, createSignal } from 'solid-js'
import QrCode from '~/components/QrCode'

export default function Home() {
    const [text, setText] = createSignal<string>('')
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
        </main>
    )
}
