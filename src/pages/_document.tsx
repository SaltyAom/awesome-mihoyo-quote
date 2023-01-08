import Document, { Html, Head, Main, NextScript } from 'next/document'
import { OpenGraph } from '@shared'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>วาทกรรมหมีหอยโอเวอร์ซีสุดเจ๋ง</title>
                    <OpenGraph
                        canonical="https://awesome-mihoyo-quote.pages.dev"
                        title="วาทกรรมหมีหอยโอเวอร์ซี สุ ด เ จ๋ ง"
                        description="ปลุกความเป็นสลิ่มในตัวคุณ"
                        image={{
                            src: '/teri.jpg',
                            width: 960,
                            height: 553
                        }}
                        icon="/bun.svg"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
