import AuthService from '@/modules/auth/services/services'
import type { Database } from '@/libs/supabse/schema'

export function useServices(){
    const supabaseClient = useSupabaseClient()
    const config = useRuntimeConfig()
    return {
        auth: AuthService(supabaseClient, {
            redirectToUrl: `${config.public.siteUrl}/auth/github`
        })
    }
}