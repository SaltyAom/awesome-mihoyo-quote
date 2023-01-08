/* eslint-disable no-bitwise */
import { useEffect, useReducer, useState } from 'react'
import type { GetStaticProps } from 'next'

import { readFile } from 'fs/promises'

export default function Awesome({ quotes }: { quotes: string[] }) {
    const randomQuoteIndex = () => ~~(Math.random() * quotes.length)

    const [isRunning, toggleRunning] = useReducer((v) => !v, true)
    const [index, setIndex] = useState(0)

    const handleRandom = () => {
        if (isRunning) setIndex(randomQuoteIndex())

        toggleRunning()
    }

    useEffect(() => {
        const limit = quotes.length - 1

        const interval = setInterval(() => {
            if (!isRunning) return

            if (index >= limit) setIndex(0)
            else setIndex((v) => v + 1)
        }, 50)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <main className="flex flex-col justify-center items-center w-full h-screen px-4 text-white text-lg gap-8 bg-black/40 overflow-hidden">
            <h1 className="text-lg sm:text-2xl text-gray-100 font-medium">
                วาทะกรรมหอยโอเวอร์ซี สุ ด เ จ๋ ง
            </h1>
            <h2
                id="awesome-quote"
                className={`text-3xl sm:text-5xl font-medium text-center max-w-5xl w-full mx-auto py-16 ${
                    isRunning ? 'whitespace-nowrap' : ''
                } overflow-ellipsis`}
                key={`${isRunning}`}
            >
                {quotes[index]}
            </h2>
            <aside className="flex flex-col sm:flex-row gap-3">
                <button
                    className="px-4 py-2 bg-white/20 hover:bg-white/40 focus:bg-white/50 backdrop-blur-lg rounded-full transition-colors"
                    type="button"
                    onClick={handleRandom}
                >
                    ปั่นเลย
                </button>
                <a
                    className="px-4 py-2 bg-white/20 hover:bg-white/40 focus:bg-white/50 backdrop-blur-lg rounded-full transition-colors"
                    href="https://github.com/saltyaom/awesome-mihoyo-quote"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    เพิ่มวาทะกรรม
                </a>
            </aside>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const README = await readFile('README.md', {
        encoding: 'utf-8'
    })

    return {
        props: {
            quotes: README.split('\n')
                .filter((x) => x.startsWith('-'))
                .map((x) => x.slice(2, x.length))
        }
    }
}
