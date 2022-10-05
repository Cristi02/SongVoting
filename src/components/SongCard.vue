<template>
    <h3>{{ title }}</h3>
    <div>Score: {{ score }}</div>
    <button @click="like">Like</button>
    <button @click="dislike">Dislike</button>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { SongType } from "../types/SongType";
import { useSongsStore } from "../store/store";
type PropsType = {
    song: SongType;
};

enum Vote {
    "like",
    "dislike",
    "none",
}

export default defineComponent({
    props: ["song"],

    setup(props: PropsType) {
        const { song } = props;
        const songsStore = useSongsStore();
        const vote = ref<Vote>(Vote.none);

        const like = () => {
            const { id } = song.songData;
            switch (vote.value) {
                case Vote.dislike:
                    songsStore.removeDislike(id);
                case Vote.none:
                    songsStore.likeASong(id);
                    vote.value = Vote.like;
                    break;
                case Vote.like:
                    songsStore.removeLike(id);
                    vote.value = Vote.none;
                    break;
            }
        };

        const dislike = () => {
            const { id } = song.songData;
            switch (vote.value) {
                case Vote.like:
                    songsStore.removeLike(id);
                case Vote.none:
                    songsStore.dislikeASong(id);
                    vote.value = Vote.dislike;
                    break;
                case Vote.dislike:
                    songsStore.removeDislike(id);
                    vote.value = Vote.none;
                    break;
            }
        };

        const score = computed(() => song.likes - song.dislikes);

        return {
            title: song.songData.snippet.title,
            // likes: computed(() => song.likes),
            // dislikes: computed(() => song.dislikes),
            score,
            like,
            dislike,
        };
    },
});
</script>
<style scoped></style>
