import { createContext, FC, useContext, useState } from 'react'

interface IAppContext {
    generatingContent: boolean
    setGeneratingContent: (value: boolean) => void
}

export const AppContext = createContext<IAppContext | null>(null)

const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppContext')
    }
    return context
}
interface IProps {
    children: React.ReactNode
}

const AppContextProvider: FC<IProps> = ({ children }) => {
    const [generatingContent, setGeneratingContent] = useState(false)
    return (
        <AppContext.Provider
            value={{
                generatingContent,
                setGeneratingContent,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, useAppContext }
