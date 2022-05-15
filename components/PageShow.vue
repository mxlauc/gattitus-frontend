<template>
    <div class="card">
        <div id="editorjs" />
    </div>
</template>
<script setup>
let EditorJS = Object
let Header = Object
let ImageTool = Object
let List = Object
if (process.client) {
    EditorJS = await import("@editorjs/editorjs")
    Header = await import("@editorjs/header")
    ImageTool = await import("@editorjs/image")
    List = await import("@editorjs/list")
}
</script>
<script>

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

                this.editor = new EditorJS({
                    readOnly: true,
                    data: JSON.parse(response.data.content),
                    tools: {
                        header: Header,
                        image: {
                            class: ImageTool,
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
