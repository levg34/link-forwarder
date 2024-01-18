// import "./index.css";

import QrCode from '~/components/QrCode'

export default function Home() {
    return (
        <main>
            <h1>Hello world!</h1>
            <QrCode text="Test text" />
        </main>
    )
}
