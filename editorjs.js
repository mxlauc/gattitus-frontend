let obj = Object;

if (process.client) {
    let m = await import("@editorjs/editorjs")
    obj = m.default
}

export default obj;