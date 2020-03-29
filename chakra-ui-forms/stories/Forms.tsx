process.env.TESTING = '1'

import React from 'react'
import {
    TextInput,
    CheckboxGroup,
    TextArea,
    Labelled,
    Select,
    Slider,
    Switch,
} from '../src'
import { Form } from 'react-final-form'
import { ThemeProvider, CSSReset, Box, Stack } from '@chakra-ui/core'

export default {
    title: 'Forms',
    component: TextInput,
}

export const All = () => {
    return (
        <ThemeProvider>
            <CSSReset />
            <Form
                onSubmit={(x) => console.log(JSON.stringify(x, null, 4))}
                validate={() => ({ name: 'error' })}
                render={({ values }) => (
                    <Stack p='40px' maxWidth='400px' spacing='40px'>
                        <Labelled
                            name='input'
                            field={<TextInput />}
                            label='Label'
                        />
                        <Labelled
                            name='area'
                            label='textArea'
                            field={
                                <CheckboxGroup
                                    items={[
                                        { value: 'cosa' },
                                        { value: 'altro' },
                                    ]}
                                />
                            }
                        />

                        <Labelled
                            name='area'
                            field={<TextArea />}
                            label='labell'
                        />
                        <Labelled
                            name='select'
                            label='select an option'
                            field={
                                <Select
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
                        <Labelled
                            name='slider'
                            label='switch this'
                            field={<Switch />}
                        />
                        <Box>
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Box>
                    </Stack>
                )}
            />
        </ThemeProvider>
    )
}
