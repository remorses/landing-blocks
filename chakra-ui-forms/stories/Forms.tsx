import { FiAirplay, FiAlertOctagon, FiAnchor } from 'react-icons/fi'

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
import { Form, useFormState, useField } from 'react-final-form'
import {
    ThemeProvider,
    CSSReset,
    Box,
    Stack,
    useColorMode,
    Button,
    ColorModeProvider,
} from '@chakra-ui/core'
import { CardOptions } from '../src/CardOptions'

export default {
    title: 'Forms',
    component: TextInput,
}

const DarkModeSwitch = (props) => {
    const { toggleColorMode, colorMode } = useColorMode()
    // return <Button onClick={toggleColorMode} children='asdfasdf' />
    const {
        values: { dark },
    } = useFormState()
    if (dark && colorMode !== 'dark') {
        toggleColorMode()
    }
    return (
        <Labelled
            name='dark'
            label='dark mode'
            field={<Switch onChange={toggleColorMode} />}
            {...props}
        />
    )
}

export const All = () => {
    return (
        <ThemeProvider>
            <ColorModeProvider>
                <CSSReset />
                <Form
                    onSubmit={(x) => console.log(JSON.stringify(x, null, 4))}
                    validate={() => ({ input: 'error' })}
                    render={({ values }) => (
                        <Stack p='40px' maxWidth='700px' spacing='40px'>
                            <DarkModeSwitch />
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
                            <Labelled
                                name='cards'
                                label='Select your card'
                                sublabel='with high attention'
                                field={
                                    <CardOptions
                                        options={[
                                            {
                                                icon: <FiAirplay />,
                                                value: 'x',
                                                label:
                                                    'The x option is the first',
                                                sublabel:
                                                    'Sublabels add text no one reads',
                                            },
                                            {
                                                icon: <FiAlertOctagon />,
                                                value: 'y',
                                                label: 'The y option',
                                                sublabel: 'maybe true',
                                            },
                                            {
                                                icon: <FiAnchor />,
                                                value: 'z',
                                                label: 'The Z makes sleep',
                                                sublabel:
                                                    'Sublabels add text no one reads',
                                            },
                                        ]}
                                        name='sdf'
                                    />
                                }
                            />
                            <Box>
                                <pre>{JSON.stringify(values, null, 4)}</pre>
                            </Box>
                        </Stack>
                    )}
                />
            </ColorModeProvider>
        </ThemeProvider>
    )
}
