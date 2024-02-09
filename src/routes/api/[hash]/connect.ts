import type { APIEvent } from '@solidjs/start/server'
import { canConnect } from '~/db/db'

export function GET({ params }: APIEvent) {
    const { hash } = params
    if (!canConnect(hash)) {
        return new Response(`Connection with ${hash} does not exist.`, { status: 400 })
    }
    return { connected: hash }
}
