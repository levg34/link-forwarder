// Import the functions and the db from the file
import { createConnection, canConnect, addLink, getLinks, removeLink, clearConnection } from '../../src/ts/db'
import db from '../../src/ts/db'


test('createConnection', () => {
    // Test that creating a connection with a new hash works
    createConnection('abc')
    expect(db.has('abc')).toBe(true)
    expect(db.get('abc')).toEqual([])

    // Test that creating a connection with an existing hash throws an error
    expect(() => createConnection('abc')).toThrow(Error)
})

test('canConnect', () => {
    // Test that canConnect returns true for an existing hash
    expect(canConnect('abc')).toBe(true)

    // Test that canConnect returns false for a non-existing hash
    expect(canConnect('xyz')).toBe(false)
})

test('addLink', () => {
    // Test that adding a link to an existing hash works
    addLink('abc', 'https://example.com')
    expect(db.get('abc')).toEqual(['https://example.com'])

    // Test that adding a link to a non-existing hash throws an error
    expect(() => addLink('xyz', 'https://example.com')).toThrow(Error)
})

test('getLinks', () => {
    // Test that getting the links for an existing hash works
    expect(getLinks('abc')).toEqual(['https://example.com'])

    // Test that getting the links for a non-existing hash throws an error
    expect(() => getLinks('xyz')).toThrow(Error)
})

test('removeLink', () => {
    // Test that removing a link from an existing hash works
    removeLink('abc', 'https://example.com')
    expect(db.get('abc')).toEqual([])

    // Test that removing a link from a non-existing hash throws an error
    expect(() => removeLink('xyz', 'https://example.com')).toThrow(Error)

    // Test that removing a non-existing link from an existing hash throws an error
    expect(() => removeLink('abc', 'https://example.com')).toThrow(Error)
})

test('clearConnection', () => {
    // Test that clearing a connection for an existing hash works
    clearConnection('abc')
    expect(db.has('abc')).toBe(false)

    // Test that clearing a connection for a non-existing hash throws an error
    expect(() => clearConnection('xyz')).toThrow(Error)
})
