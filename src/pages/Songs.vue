<template>
    <ul>
        <li v-for="song in songsTitleList" :key="song">{{ song }}</li>
    </ul>
    <SongCard v-for="song in songList" :key="song.songData.id" :song="song" />
</template>
<script lang="ts">
import { useSongsStore } from "../store/store";
import SongCard from "../components/SongCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
    setup() {
        const store = useSongsStore();
        const songList = store.songs;
        const songsTitleList = store.songs.map((x) => x.songData.snippet.title);
        return {
            songsTitleList,
            songList,
        };
    },
    components: { SongCard },
});
</script>
<style scoped></style>
