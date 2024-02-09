import { APIEvent } from '@solidjs/start/server'
import { addLink } from '~/db/db'

export function POST({ params }: APIEvent) {
    const { hash, link } = params
    try {
        addLink(hash, link)
        return { added: { hash, link } }
    } catch (e) {
        return new Response(e?.toString(), { status: 500 })
    }
}
