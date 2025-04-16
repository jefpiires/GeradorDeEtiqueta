'use client'

import useTheme from "../hooks/useTheme"


export default function ThemeToggleButton() {
    const { toggleTheme, theme } = useTheme()

    const handleTggleTheme = () => {
        console.log('Theme', theme, 'toggleTheme', toggleTheme)
        toggleTheme()
    }
    return (
        <button
            onClick={handleTggleTheme}
            className="fixed bottom-4 right-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow-md transition"
        >
            {theme === 'light' ? (
                <span role="img" aria-label="Dark Mode">
                    🌙
                </span>
            ) : (
                <span role="img" aria-label="Light Mode">
                    ☀️
                </span>
            )}

        </button>
    )
}