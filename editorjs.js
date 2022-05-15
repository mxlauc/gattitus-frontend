let obj = Object

if (process.client) {
    const m = await import("@editorjs/editorjs")
    obj = m.default
}

export default obj
