process.env.TESTING = '1'

import React from 'react'
import {
    TextInput,
    CheckboxGroup,
    TextArea,
    Labelled,
    Select,
    Slider,
} from '../src'
import { Form } from 'react-final-form'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'

export default {
    title: 'Forms',
    component: TextInput,
}

export const All = () => {
    return (
        <ThemeProvider>
            <CSSReset />
            <Form
                onSubmit={(x) => alert(JSON.stringify(x, null, 4))}
                validate={() => ({ name: 'error' })}
                render={({ values }) => (
                    <Box p='40px' maxWidth='400px'>
                        <Labelled
                            name='name'
                            field={<TextInput name='name' />}
                            label='Label'
                        />
                        <Labelled
                            name='area'
                            label='textArea'
                            field={
                                <CheckboxGroup
                                    flexDir='column'
                                    name='items'
                                    items={[
                                        { value: 'cosa' },
                                        { value: 'altro' },
                                    ]}
                                />
                            }
                        />

                        <Labelled
                            name='area'
                            field={<TextArea name='area' />}
                            label='labell'
                        />
                        <Labelled
                            name='select'
                            label='select an option'
                            field={
                                <Select
                                    name='sele'
                                    items={[{ value: '1' }, { value: '2' }]}
                                    isRequired
                                />
                            }
                        />
                        <Labelled
                            name='slider'
                            label='select an option'
                            field={<Slider max={10} name='slide' />}
                        />

                        <pre>{JSON.stringify(values, null, 4)}</pre>
                    </Box>
                )}
            />
        </ThemeProvider>
    )
}
