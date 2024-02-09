import type { APIEvent } from '@solidjs/start/server'
import { createConnection } from '~/db/db'

export function POST({ params }: APIEvent) {
    const { hash } = params
    try {
        createConnection(hash)
        return { created: hash }
    } catch (e) {
        return new Response(e?.toString(), { status: 500 })
    }
}
