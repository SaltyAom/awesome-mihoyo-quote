import { useEffect } from 'react'

import { AppProps } from 'next/app'

import '@styles/global.sass'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    return <Component {...pageProps} />
}
