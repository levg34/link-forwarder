import * as linkify from 'linkifyjs'

type Props = {
    text: string
}

export default function Linkify(props: Props) {
    const isLink = linkify.test(props.text)
    let link
    if (isLink) {
        link = linkify.find(props.text)[0]
    }
    return <div>{isLink ? <a href={link?.href ?? props.text}>{props.text}</a> : props.text}</div>
}
