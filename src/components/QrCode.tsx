import QRCode from 'qrcode';
import { onMount } from 'solid-js';
import { createEffect } from 'solid-js';

export default (props: { text: string }) => {
  let canvas: HTMLCanvasElement | ((el: HTMLCanvasElement) => void) | undefined;

  const generateQrCode = () => QRCode.toCanvas(canvas, props.text);

  onMount(() => {
    generateQrCode();
  });

  createEffect(() => generateQrCode());

  return <canvas ref={canvas} />;
};
