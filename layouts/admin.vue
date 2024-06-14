<script setup>
import Header from '~/modules/auth/components/Header/Header.vue';
import { useSession } from '@/modules/auth/composables/useSession/useSession'
import { useMySelf } from '@/modules/users/composables/useMySelf/useMySelf'

const session = useSession();
const router = useRouter()
const { loading, user } = useMySelf()
console.log('user', user)

const handleLogout = async () => {
    const { error } = await session.logout()

    if(!error){
        router.push('/')
    }
}
</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
        <MainContent>
            <template #header>
                <Header 
                profile-pic="img"
                nickname="erickolkjhonson"
                @navigate-to-new-gist="() => router.push('/app/gist/create')"
                @navigate-to-profile-edit="() => router.push('/app/profile/edit')"
                @navigate-to-sales="() => router.push('/app/sales/all')"
                @navigate-to-reports="() => router.push('/app/panel')"
                @logout="handleLogout()"
                />
                
            </template>

            <template #content>
                <slot/>
            </template>
        </MainContent>
    </div>
</template>