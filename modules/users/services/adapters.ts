import type { User } from '@/modules/users/entities/User/User'
import type { Database } from '@/libs/supabse/schema'
import type { Address } from '@/modules/users/entities/Address/Address'

type ProfileTable = Database['public']['Tables']['profiles']
type Row = ProfileTable['Row']

export function getMySelfAdapter(data: Row | null): User | null{
    if (!data){
        return null
    }

    const address = data.address as unknown as Address

    return {
        id: data.id,
        avatarUrl: data.avatar_url,
        username: data.username,
        name: data.name,
        site: data.site ?? undefined,
        bio: data.bio ?? undefined,
        phone: data.phone ?? undefined,
        address,
        created_at: new Date(data.created_at)

    }
}