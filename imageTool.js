let obj = Object

if (process.client) {
    const m = await import("@editorjs/image")
    obj = m.default
}

export default obj
