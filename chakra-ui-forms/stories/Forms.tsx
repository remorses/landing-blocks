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
    SingleCheckbox,
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
                validate={() => ({ input: 'error' })}
                render={({ values }) => (
                    <Stack p='40px' maxWidth='700px' spacing='40px'>
                        <Labelled
                            name='input'
                            sublabel='description of input'
                            field={<TextInput />}
                            label='Label'
                        />
                        <Labelled
                            name='checkbox'
                            field={<SingleCheckbox label='single one' />}
                            label='checkbox'
                        />
                        <Labelled
                            name='checkboxgroup'
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
                            name='switch'
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
