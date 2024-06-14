import type { User } from '@/modules/users/entities/User/User'
import { useSession } from '~/modules/auth/composables/useSession/useSession'




export function useMySelf() {
    const { logAndTrack } = useLogger()
    const services = useServices()
    const session = useSession()
    const loading = ref<boolean>(true)
    const user = ref<User>()

    const fetchUser = async () => {
        loading.value = true

        try {
            const response = await services.users.getMySelf(session.user.value?.id)
            if(!response) {
                return
            }

            user.value = response
        } catch (e) {
            logAndTrack(e)
        }finally{
            loading.value = false
        }
    }

    onMounted(() => {
        fetchUser()
    })

    return {
        loading,
        user
    }
}