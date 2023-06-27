type Liferay = {
    Language: {
        get(key: string): string
    }
}

declare global {
    interface Window {
        Liferay?: Liferay
    }
}

export const Liferay : Liferay = window.Liferay ?? {
    Language: {
        get(key) {
            return key
        },
    }
}