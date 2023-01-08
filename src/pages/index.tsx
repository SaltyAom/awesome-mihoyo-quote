/* eslint-disable no-bitwise */
import { useReducer } from 'react'
import type { GetStaticProps } from 'next'

import { readFile } from 'fs/promises'

export default function Awesome({ quotes }: { quotes: string[] }) {
    const randomQuote = () => quotes[~~(Math.random() * quotes.length)]

    const [current, random] = useReducer(randomQuote, randomQuote())

    return (
        <main className="flex flex-col justify-center items-center w-full h-screen px-4 text-white text-lg gap-8 bg-black/40">
            <h1 className="text-3xl sm:text-5xl font-medium py-12">{current}</h1>
            <aside className='flex gap-3'>
                <button
                    className="px-4 py-2 rounded border border-gray-400"
                    type="button"
                    onClick={random}
                >
                    ปั่นเลย
                </button>
                <a
                    className="px-4 py-2 rounded border border-gray-400"
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
