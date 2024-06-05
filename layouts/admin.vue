<template>
    <div class="w-full h-full flex flex-col items-center">
        <MainContent>
            <template #header>
            </template>

            <template #content>
                <slot/>
            </template>
        </MainContent>
    </div>
</template>