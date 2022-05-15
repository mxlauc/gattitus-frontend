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
                ref="title"
                :value="page?.title">
        </div>
        <div class="col-6">
            <input
                type="text"
                placeholder="slug"
                ref="slug"
                :value="page?.slug">
        </div>
    </div>

    <div class="card">
        <div id="editorjs" />
    </div>
</template>
<script>
import EditorJS from "~/editorjs"
import Header from "~/header"
import ImageTool from "~/imageTool"
import List from "~/list"

import { useMainStore } from "~/store/mainStore"
import axios from "axios"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            editor: null,
            page: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pages/${this.$route.params.slug}`)
            .then(response => {
                this.page = response.data
                const methodUploader = this.uploadByFile

                this.editor = new EditorJS({
                    readOnly: false,
                    data: JSON.parse(response.data.content),
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
                axios.patch(`${this.mainStore.backendUrl}/api/pages/${this.page.slug}`,
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
