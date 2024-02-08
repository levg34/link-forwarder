import type { APIEvent } from '@solidjs/start/server'
import { createConnection } from '~/db/db'

export function POST({ params }: APIEvent) {
    const { hash } = params
    createConnection(hash)
    return { connected: hash }
}
