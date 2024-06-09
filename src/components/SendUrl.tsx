import { useSearchParams } from '@solidjs/router'
import axios from 'axios'
import { Setter } from 'solid-js'

export default function SendUrls(props: { uuid: string; text: string; setText: Setter<string> }) {
    const [searchParams] = useSearchParams()
    const uuid = searchParams.uuid

    return (
        <div>
            <input
                type="text"
                value={props.text}
                oninput={(e) => {
                    props.setText(e.target.value)
                }}
                placeholder="Enter URL or text"
            />
            <button
                onclick={async () => {
                    const { data } = await axios.post(
                        '/api/' + (uuid ? uuid : props.uuid) + '/link/' + encodeURIComponent(props.text)
                    )
                    console.log(data)
                    props.setText('')
                }}
            >
                Send
            </button>
        </div>
    )
}
