'use client'

import { useEffect, useState } from 'react'

export default function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        console.log('saved', localStorage.getItem('theme'))
        const saved = localStorage.getItem('theme') as 'light' | 'dark'
        if (saved === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
    }, [])

    const toggleTheme = () => {
        console.log('toggleTheme', theme)
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }

    return { theme, toggleTheme }
}