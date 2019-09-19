<template>
<div>
    <AppToolbar v-model="drawer" />
    <AppMenu v-model="drawer" />

    <v-container>
        <v-flex>
            <slot />
        </v-flex>
    </v-container>
</div>

</template>

<script>

import AppMenu from './AppMenu.vue'
import AppToolbar from './AppToolbar.vue'

export default {
    name: 'AppLayout',
    components: {
        AppMenu,
        AppToolbar
    },
    data: () => ({
        drawer: false
    })
}
</script>

