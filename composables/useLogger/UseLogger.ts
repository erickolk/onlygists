export function useLogger() {
    const config = useRuntimeConfig()

    const isProd = config.public.nodeEnv === 'production'

    const logAndTrack = (...args: any[]) => {
        if(isProd){
            return
        }

        console.log(...args)
    }

    return {
        logAndTrack
    }
}