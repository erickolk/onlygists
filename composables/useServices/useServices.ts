import AuthService from '@/modules/auth/services/services'
import type { Database } from '@/libs/supabse/schema'
import UserService from '@/modules/users/services/services'

export function useServices(){
    const supabaseClient = useSupabaseClient<Database>()
    const config = useRuntimeConfig()
    return {
        auth: AuthService(supabaseClient, {
            redirectToUrl: `${config.public.siteUrl}/auth/github`
        }),
        users: UserService(supabaseClient)
    }
}