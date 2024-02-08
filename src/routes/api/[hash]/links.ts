import type { APIEvent } from '@solidjs/start/server'
import { getLinks } from '~/db/db'

export function GET({ params }: APIEvent) {
    const { hash } = params
    return getLinks(hash)
}
