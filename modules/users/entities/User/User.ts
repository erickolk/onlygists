import type { Address } from '@/modules/users/entities/Address/Address'

export interface User {
    id: string,
    avatarUrl: string,
    username: string,
    name: string,
    site?: string,
    bio?: string,
    phone?: string,
    address?: Address,
    created_at: Date
}