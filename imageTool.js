let obj = Object;

if (process.client) {
    let m = await import("@editorjs/image")
    obj = m.default
}

export default obj;