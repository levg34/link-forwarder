const db = new Map<string, string[]>()

export function createConnection(hash: string): void {
    if (db.has(hash)) {
        throw Error(`Connection with hash ${hash} already exists`)
    } else {
        db.set(hash, [])
    }
}

export function canConnect(hash: string): boolean {
    return db.has(hash)
}

export function addLink(hash: string, link: string): void {
    const links = db.get(hash)
    if (!Array.isArray(links)) {
        throw Error(`Connection with hash ${hash} does not exist`)
    } else {
        links.push(link)
    }
}

export function getLinks(hash: string): string[] {
    const links = db.get(hash)
    if (!Array.isArray(links)) {
        throw Error(`Connection with hash ${hash} does not exist`)
    } else {
        return links
    }
}

export function removeLink(hash: string, link: string): void {
    const links = db.get(hash)
    if (!Array.isArray(links)) {
        throw Error(`Connection with hash ${hash} does not exist`)
    } else {
        const index = links.indexOf(link)
        if (index == -1) {
            throw Error(`Link ${link} does not exist in connection ${hash}`)
        } else {
            links.splice(index, 1)
        }
    }
}

export function clearConnection(hash: string): void {
    if (!db.delete(hash)) {
        throw Error(`Connection with hash ${hash} does not exist`)
    }
}

export default db
