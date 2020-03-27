import React, { useContext, useRef } from 'react'
import { Box } from '@chakra-ui/core'
import { LiveEditorProps, LiveContext } from 'react-live'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import {
    ControlledEditor as Editor,
    ControlledEditorOnChange,
    Monaco,
} from '@monaco-editor/react'
import { monaco, EditorProps } from '@monaco-editor/react'

function addExtraLibs({
    monaco,
    extraLibs,
}: {
    monaco: Monaco
    extraLibs: { filePath; content }[]
}) {
    monaco.languages.typescript.typescriptDefaults.setExtraLibs(extraLibs)
    extraLibs.forEach(({ filePath }) => {
        monaco.editor.createModel(
            ' ',
            'typescript',
            new monaco.Uri().with({ path: filePath }),
        )
    })
}

type Props = {
    extraLibs?: { content; filePath }[]
    options?: monacoEditor.editor.IEditorConstructionOptions
    tsconfig?: any
    extension?: string
    hiddenTopCode?: any
    buildEditor?: ({
        monaco,
        editor,
    }: {
        monaco: typeof monacoEditor
        editor: monacoEditor.editor.IStandaloneCodeEditor
    }) => void
    typesCode?: string
} & EditorProps

export const MonacoEditor = ({
    language = 'typescript',
    extraLibs = [],
    options = {} as monacoEditor.editor.IEditorConstructionOptions,
    tsconfig = {},
    buildEditor = null,
    extension = '.tsx',
    hiddenTopCode = '',
    typesCode = '',
    ...rest
}: Props) => {
    // extraLibs = [...defaultExtraLibs, ...extraLibs]
    const { code, onChange: _onChange }: LiveEditorProps = useContext(
        LiveContext,
    )
    const value: string = hiddenTopCode + (code || '')
    const onChange: ControlledEditorOnChange = (ev, v) => {
        v = v || ''
        console.log(v)
        _onChange && _onChange(v)
    }

    return (
        <Editor
            height='200px'
            value={value}
            onChange={onChange}
            theme={'dark'}
            language={language}
            editorDidMount={(_valueGetter, editor) => {
                monaco.init().then((monaco) => {
                    const model = monaco.editor.createModel(
                        value,
                        language,
                        monaco.Uri.parse('file://index' + extension),
                    )
                    editor.setModel(null)
                    editor.setModel(model)
                    monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
                        {
                            target:
                                monaco.languages.typescript.ScriptTarget.ES2016,
                            allowNonTsExtensions: true,
                            moduleResolution:
                                monaco.languages.typescript.ModuleResolutionKind
                                    .NodeJs,
                            module:
                                monaco.languages.typescript.ModuleKind.CommonJS,
                            noEmit: true,
                            strict: false,
                            resolveJsonModule: true,
                            allowJs: true,
                            typeRoots: ['node_modules/@types'],
                            lib: ['DOM'],
                            jsx: monaco.languages.typescript.JsxEmit.React,
                            ...tsconfig,
                        },
                    )
                    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
                        {
                            noSemanticValidation: false,
                            noSyntaxValidation: false,
                        },
                    )
                    addExtraLibs({ monaco, extraLibs })
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                        typesCode,
                    )
                    buildEditor && buildEditor({ monaco, editor })

                    // console.log({ model: monaco.editor.getModels() })
                })
            }}
            options={options}
            {...rest}
        />
    )
}
