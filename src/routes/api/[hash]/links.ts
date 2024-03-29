import type { APIEvent } from '@solidjs/start/server'
import { getLinks } from '~/db/db'

export function GET({ params }: APIEvent) {
    const { hash } = params
    try {
        return getLinks(hash)
    } catch (e) {
        return new Response(e?.toString(), { status: 500 })
    }
}
