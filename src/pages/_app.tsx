import { AppProps } from 'next/app'
import { OpenGraph } from '@shared'

import '@styles/global.sass'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <OpenGraph
                canonical="https://awesome-mihoyo-quote.netlify.app"
                title="วาทกรรมหมีหอยโอเวอร์ซี สุ ด เ จ๋ ง"
                description="ปลุกความเป็นสลิ่มในตัวคุณ"
                image={{
                    src: '/teri.jpg',
                    width: 960,
                    height: 553
                }}
                icon="/teri.jpg"
            />
            <Component {...pageProps} />
        </>
    )
}
