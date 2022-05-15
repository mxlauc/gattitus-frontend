<template>
    <button
        class="btn btn-primary"
        @click="save">
        Guardar
    </button>
    <div class="row">
        <div class="col-6">
            <input
                type="text"
                placeholder="title"
                ref="title">
        </div>
        <div class="col-6">
            <input
                type="text"
                placeholder="slug"
                ref="slug">
        </div>
    </div>
    <div class="card">
        <div id="editorjs" />
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"

const mainStore = useMainStore()

let EditorJS = Object
let Header = Object
let ImageTool = Object
let List = Object
if (process.client) {
    EditorJS = (await import("@editorjs/editorjs")).default
    Header = (await import("@editorjs/header")).default
    ImageTool = (await import("@editorjs/image")).default
    List = (await import("@editorjs/list")).default
}
</script>
<script>

import axios from "axios"

export default {
    data () {
        return {
            editor: null
        }
    },
    mounted () {
        const methodUploader = this.uploadByFile
        this.editor = new this.EditorJS({
            readOnly: false,
            tools: {
                header: this.Header,
                image: {
                    class: this.ImageTool,
                    config: {
                        buttonContent: "Escoge una image",
                        uploader: {
                            uploadByFile: methodUploader
                        }
                    }
                },
                list: {
                    class: this.List,
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
        },
        save () {
            this.editor.save().then(r => console.log(JSON.stringify(r)))
            this.editor.save().then(r => {
                axios.post(`${this.mainStore.backendUrl}/api/pages`,
                    {
                        title: this.$refs.title.value,
                        slug: this.$refs.slug.value,
                        content: JSON.stringify(r),
                    })
            })
        },
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
