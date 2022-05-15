let obj = Object

if (process.client) {
    const m = await import("masonry-layout")
    obj = m.default
}

export default obj
