let obj = Object;

if (process.client) {
    let m = await import("@editorjs/list")
    obj = m.default
}

export default obj;