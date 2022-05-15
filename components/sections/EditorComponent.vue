<template>
    <div class="card border-0 shadow-sm">
        <div class="card-body pt-3">
            <div id="editorjs" />
        </div>
    </div>
</template>
<script>
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import ImageTool from "@editorjs/image"
import List from "@editorjs/list"

import axios from "axios"
import { useMainStore } from "~/store/mainStore"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            editor: null
        }
    },
    mounted () {
        const methodUploader = this.uploadByFile
        this.editor = new EditorJS({
            readOnly: true,
            data: { time: 1651716698371, blocks: [{ id: "XrtVzQGpjW", type: "header", data: { text: "Hola como estan todos ustedes", level: 2 } }, { id: "s0H35YXEAM", type: "paragraph", data: { text: "As described in&nbsp;<a href=\"https://editorjs.io/base-concepts\">Base Concepts</a>, each Block in Editor.js is provided by a Plugin.&nbsp;There are simple external scripts with their own logic.&nbsp;" } }, { id: "5edMkIX98I", type: "paragraph", data: { text: "There is the only Paragraph block already included in Editor.js. Probably you want to use several Block Tools that should be installed and connected." } }, { id: "etnLnMfFQk", type: "paragraph", data: { text: "You can find some available Blocks&nbsp;<a href=\"https://github.com/editor-js\">here</a>. Select the Blocks you need and follow the installation guide in their README.md files." } }, { id: "NvViyBiKK6", type: "paragraph", data: { text: "To get started using Editor.js, follow these steps:" } }, { id: "2gbqMrLPD1", type: "list", data: { style: "ordered", items: ["Install Editor.js&nbsp;", "Configure and initialise the Editor", "Install and connect Tools"] } }, { id: "mmERjCpqrm", type: "header", data: { text: "Installation", level: 4 } }, { id: "11PS5KRqpI", type: "paragraph", data: { text: "Choose the most usable method of getting Editor.js for you." } }, { id: "LvyZq5n22u", type: "list", data: { style: "ordered", items: ["Node package", "Source from CDN", "Local file from project"] } }, { id: "T0Yf8EIAbg", type: "header", data: { text: "Node.js package", level: 4 } }, { id: "TNMttrxbQX", type: "paragraph", data: { text: "Install the package via NPM&nbsp;or Yarn" } }, { id: "VT3xrabSPu", type: "image", data: { file: { url: "https://firebasestorage.googleapis.com/v0/b/proyectoxdxd-6a713.appspot.com/o/gattitus%2F2484623438347919%2Fimgs%2F18091faa1dd_d3d72caa-3166-4595-a54f-384671378bbe%2Flg.jpg?alt=media&token=3a2fc164-4383-4dfd-8cb6-8b807e80aea1" }, caption: "", withBorder: false, stretched: false, withBackground: false } }], version: "2.23.2" },
            tools: {
                header: Header,
                image: {
                    class: ImageTool,
                    config: {
                        buttonContent: "Escoge una image",
                        uploader: {
                            uploadByFile: methodUploader
                        }
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                }

            },
            i18n: {
                messages: {
                    ui: {
                        blockTunes: {
                            toggler: {
                                "Click to tune": "Click para más opciones",
                                "or drag to move": "O arrastra para mover"
                            },
                        },
                        inlineToolbar: {
                            converter: {
                                "Convert to": "Convertir a"
                            }
                        },
                        toolbar: {
                            toolbox: {
                                Add: "Agregar elemento"
                            }
                        }
                    },
                    toolNames: {
                        Text: "Texto",
                        Heading: "Titulo",
                        List: "Lista",
                        Link: "Enlace",
                        Bold: "Negrita",
                        Italic: "Italica",
                    },
                    tools: {
                        link: {
                            "Add a link": "Agregar enlace"
                        },
                        stub: {
                            "The block can not be displayed correctly.": "El elemento no puede ser mostrado correctamente"
                        }
                    },
                    blockTunes: {
                        delete: {
                            Delete: "Eliminar"
                        },
                        moveUp: {
                            "Move up": "Subir"
                        },
                        moveDown: {
                            "Move down": "Bajar"
                        }
                    },
                }
            },
        })
    },
    methods: {
        uploadByFile (file) {
            this.editor.save().then(r => console.log(JSON.stringify(r)))
            return new Promise((resolve, reject) => {
                const formData = new FormData()
                formData.append("file", file)
                axios.post(`${this.mainStore.backendUrl}/api/images`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                    .then(response => {
                        resolve({
                            success: 1,
                            file: {
                                url: response.data.url
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        }
    }
}
</script>
<style>
        #editorjs {
            min-height: 70vh;
        }

        #editorjs h1,#editorjs h2,#editorjs h3,#editorjs h4,#editorjs h5,#editorjs h6 {
            color: #f90;
            font-weight: bold;
        }

        #editorjs .ce-toolbar__settings-btn {
            border-radius: 5px;
            background-color: #fff;
            border: 1px solid #eee;
        }

        #editorjs .icon--dots {
            color: #f90;
        }

        #editorjs .ce-settings__button {
            color: #f90;
        }

        #editorjs .ce-inline-toolbar__dropdown {
            color: #f90;
        }

        #editorjs .ce-inline-tool {
            color: #f90;
        }

        #editorjs .ce-toolbox__button {
            color: #f90;
        }

        #editorjs .ce-toolbar__plus {
            color: #f90;

        }

</style>
