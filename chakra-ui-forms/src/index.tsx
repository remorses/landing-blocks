import React, { useEffect } from 'react'
import * as c from '@chakra-ui/core'
import { Form, Field, useField, useForm } from 'react-final-form'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-yaml'
import 'prismjs/themes/prism.css'
import { FieldValidator } from 'final-form'

export const Label = ({ children, ...rest }: c.BoxProps) => {
    return <c.Text {...rest}>{children}</c.Text>
}

export const SubLabel = ({ children }) => {
    return (
        <c.Text my='5px' opacity={0.5}>
            {children}
        </c.Text>
    )
}

export interface BaseProps {
    name: string
    validate?: FieldValidator<any>
}

export function TextArea({
    name,
    validate = undefined,
    defaultValue,
    ...rest
}: BaseProps & c.InputProps<HTMLTextAreaElement>) {
    const { input, meta } = useField(name, {
        initialValue: defaultValue,
        validate,
        parse: (x) => x,
    })
    return (
        <c.Textarea
            {...input}
            {...rest}
            isInvalid={meta.error && meta.touched}
        />
    )
}

export function CodeEditor({
    name,
    language = 'yaml',
    validate = undefined,
    defaultValue,
    ...rest
}: {
    language?: string
    defaultValue
} & BaseProps &
    c.BoxProps) {
    const { input, meta } = useField(name, {
        defaultValue: defaultValue,
        type: 'string',
        validate,
        parse: (x) => x,
    })
    const { colorMode } = c.useColorMode()
    return (
        <c.Box
            border='1px solid'
            borderColor={{ light: 'gray.300', dark: 'gray.700' }[colorMode]}
            // bg={{ light: 'white', dark: 'black.900' }[colorMode]}
            borderRadius='4px'
            {...rest}
        >
            <Editor
                value={(input.value as string) || ''}
                onValueChange={(x) => input.onChange(x || '')}
                highlight={(code) => highlight(code, languages[language])}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    // background: 'black'
                }}
            />
        </c.Box>
    )
}

export function TextInput({
    name,
    validate,
    ...rest
}: BaseProps & c.InputProps) {
    const { input, meta } = useField(name, {
        initialValue: rest.defaultValue,
        validate,
        parse: (x) => x,
    })
    return (
        <c.Input {...input} {...rest} isInvalid={meta.error && meta.touched} />
    )
}

export function Slider({ name, validate, ...rest }: BaseProps & c.SliderProps) {
    const { input, meta } = useField(name, {
        initialValue: rest.defaultValue,
        validate,
        parse: (x) => x,
    })
    return (
        <c.Slider {...input} {...rest}>
            <c.SliderTrack />
            <c.SliderFilledTrack />
            <c.SliderThumb size='18px'>
                <c.Box
                    shadow='lg'
                    w='100%'
                    h='100%'
                    border='1px solid'
                    borderColor='gray.300'
                    borderRadius='100%'
                />
            </c.SliderThumb>
        </c.Slider>
    )
}

export const NumberInput = ({
    name,
    validate,
    ...rest
}: BaseProps & c.NumberInputProps) => {
    const { input, meta } = useField(name, {
        initialValue: rest.defaultValue,
        validate,
        parse: (x) => x,
    })
    return (
        <c.NumberInput
            {...input}
            {...rest}
            isInvalid={meta.error && meta.touched}
        />
    )
}

export const SingleCheckbox = ({
    name,
    label,
}: { name; label } & Omit<c.CheckboxProps, 'children'>) => {
    const {
        input: { checked, ...input },
        meta: { error, touched, invalid },
    } = useField(name, {
        type: 'checkbox', // important for RFF to manage the checked prop
    })
    return (
        <c.FormControl isInvalid={touched && invalid} my={4}>
            <c.Checkbox {...input} isInvalid={touched && invalid} my={4}>
                {label}
            </c.Checkbox>
            <c.FormErrorMessage>{error}</c.FormErrorMessage>
        </c.FormControl>
    )
}

const CheckboxArray = ({ name, value, label, ...rest }) => {
    const {
        input: { checked, ...input },
        meta: { error, touched },
    } = useField(name, {
        type: 'checkbox', // important for RFF to manage the checked prop
        value, // important for RFF to manage list of strings
    })
    return (
        <c.Checkbox
            {...input}
            isChecked={checked}
            isInvalid={error && touched}
            {...rest}
        >
            {label}
        </c.Checkbox>
    )
}

export const CheckboxGroup = ({
    items,
    name,
    ...rest
}: Omit<c.StackProps, 'name'> & { items; name }) => {
    return (
        <c.Stack spacing='10px' {...rest}>
            {items.map(({ value, label }) => (
                <CheckboxArray
                    value={value}
                    name={name}
                    key={label || value}
                    label={label || value}
                />
            ))}
        </c.Stack>
    )
}
export const RadioGroup = ({ label, name, children }) => {
    const { input, meta } = useField(name)
    return (
        <c.FormControl isInvalid={meta.touched && meta.invalid} my={4}>
            <c.FormLabel htmlFor={input.name}>{label}</c.FormLabel>
            <c.RadioGroup {...input}>{children}</c.RadioGroup>
            <c.FormErrorMessage>{meta.error}</c.FormErrorMessage>
        </c.FormControl>
    )
}

const Control = ({ name, ...rest }) => {
    const {
        meta: { error, touched },
    } = useField(name, { subscription: { touched: true, error: true } })
    return <c.FormControl {...rest} isInvalid={error && touched} />
}

export interface Item {
    value: string
    label?: string
    disabled?: boolean
}

export const Select = ({
    name,
    items,
    ...rest
}: { name; items: Item[] } & c.SelectProps) => {
    const {
        input,
        meta: { error, touched },
    } = useField(name, {
        initialValue: rest.defaultValue,
    })
    // useEffect(() => {
    //     items.length && input.onChange(items[1]?.value)
    // }, [items.length])
    return (
        <c.Select {...input} isInvalid={touched && error} {...rest}>
            {items.map(({ value, label, disabled }) => (
                <option key={value} disabled={disabled || false} value={value}>
                    {label || value}
                </option>
            ))}
        </c.Select>
    )
}

export const ValidationError = ({ name }) => {
    const {
        meta: { error, touched },
    } = useField(name, { subscription: { error: true, touched: true } })
    return (
        <>
            {touched && error && (
                <c.Text my='10px' color='red.500'>
                    {error}
                </c.Text>
            )}
        </>
    )
}

export const Labelled = ({ name, label, field }) => {
    return (
        <Control name={name} my={4}>
            <c.FormLabel htmlFor={name}>{label}</c.FormLabel>
            {field}
            <ValidationError name={name} />
        </Control>
    )
}

export const PercentComplete = (props) => {
    const form = useForm()
    const numFields = form.getRegisteredFields().length
    const numErrors = Object.keys(form.getState().errors).length
    return (
        <c.Progress
            borderRadius='4px'
            value={
                numFields === 0
                    ? 0
                    : ((numFields - numErrors) / numFields) * 100
            }
            {...props}
        />
    )
}
