let obj = Object;

if (process.client) {
    let m = await import("masonry-layout")
    obj = m.default
}

export default obj;