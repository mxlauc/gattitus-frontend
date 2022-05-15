let obj = Object

if (process.client) {
    const m = await import("@editorjs/header")
    obj = m.default
}

export default obj
