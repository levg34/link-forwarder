// import "./index.css";

import { A } from '@solidjs/router'
import { Show, createSignal, onMount } from 'solid-js'
import QrCode from '~/components/QrCode'
import Connect from './connect'

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
            {/* <A href="/connect">Connect</A> */}
            <Connect uuid={uuid}/>
        </main>
    )
}
