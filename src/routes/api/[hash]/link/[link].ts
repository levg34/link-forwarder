import { APIEvent } from '@solidjs/start/server'
import { addLink } from '~/db/db'

export function POST({ params }: APIEvent) {
    const { hash, link } = params
    addLink(hash, link)
    return { added: { hash, link } }
}
