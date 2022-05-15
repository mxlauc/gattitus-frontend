let obj = Object;

if (process.client) {
    let m = await import("@editorjs/header")
    obj = m.default
}

export default obj;