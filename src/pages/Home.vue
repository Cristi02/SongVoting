<template>
    <div>
        <h2>Top 10 songs</h2>
        <ul>
            <li v-for="song in songList" :key="song">{{ song }}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useSongsStore } from "../store/store";
export default defineComponent({
    setup() {
        const store = useSongsStore();
        const songList = store.topTenPopular.map(
            (x) => x.songData.snippet.title
        );
        return { songList };
    },
});
</script>
<style scoped></style>
