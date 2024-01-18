import QrCode from '~/components/QrCode'

export default function Connect(props: { uuid: string }) {
    return (
        <>
            <h3>Scan this code to connect.</h3>
            <QrCode text={window.location.href + '?uuid=' + props.uuid} />
        </>
    )
}
