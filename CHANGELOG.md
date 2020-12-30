2.0.0

-   Updated to `@chakra-ui/react` 1 and `@emotion/react` 11 peer dependencies

-   Now you will need to wrap `LandingProvider` with `ChakraProvider` to pass correct theme:

```tsx
// _app.jsx
import { LandingProvider, Hero } from 'landing-blocks'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ChakraProvider>
            <LandingProvider>...</LandingProvider>
        </ChakraProvider>
    )
}
```
