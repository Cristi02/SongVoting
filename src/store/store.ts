import { defineStore } from "pinia";
import songFile from "./youtube_songs_list.json";

const songList = songFile.items.map((x, index) => {
    return { songData: x, likes: index, dislikes: 0 };
});

export const useSongsStore = defineStore("songs", {
    state: () => ({ songs: songList }),
    getters: {
        topTenPopular: (state) =>
            state.songs
                .sort((a, b) =>
                    a.likes - a.dislikes < b.likes - b.dislikes ? 1 : -1
                )
                .slice(0, 10),
    },
});
