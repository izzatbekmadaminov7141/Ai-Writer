/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_OPEN_AI_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
