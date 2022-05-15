let obj = Object

if (process.client) {
    const m = await import("@editorjs/list")
    obj = m.default
}

export default obj
