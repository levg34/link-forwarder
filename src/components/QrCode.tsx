import QRCode from 'qrcode'
import { Show, onMount } from 'solid-js'
import { createEffect } from 'solid-js'

export default (props: { text: string }) => {
    let canvas: HTMLCanvasElement | ((el: HTMLCanvasElement) => void) | undefined

    const generateQrCode = () => {
        if (props.text) QRCode.toCanvas(canvas, props.text)
    }

    onMount(() => {
        generateQrCode()
    })

    createEffect(() => generateQrCode())

    return (
        <Show when={props.text} fallback={<div>QR Code cannot be generated with no data.</div>}>
            <canvas ref={canvas} />
        </Show>
    )
}
