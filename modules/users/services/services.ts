import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/libs/supabse/schema'
import { getMySelfAdapter } from './adapters'



export default (client: SupabaseClient<Database>) => ({
    async getMySelf(id: string){
        const response = await client.from('profiles').select('*').eq('id', id).limit(1).single()
        const user = getMySelfAdapter(response.data)
        return user
    }
})