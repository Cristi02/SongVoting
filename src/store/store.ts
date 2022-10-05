import { defineStore } from "pinia";
import { SongType } from "../types/SongType";
import songFile from "./youtube_songs_list.json";

const songList: SongType[] = songFile.items.map((x, index): any => {
    return { songData: x, likes: index, dislikes: 0 };
});

export const useSongsStore = defineStore("songs", {
    state: () => ({ songs: songList }),
    actions: {
        findSong(id: string): SongType {
            return this.songs.find(
                (song) => song.songData.id === id
            ) as SongType;
        },
        likeASong(id: string) {
            const song = this.findSong(id);
            song.likes++;
        },
        dislikeASong(id: string) {
            const song = this.findSong(id);
            song.dislikes++;
        },

        removeLike(id: string) {
            const song = this.findSong(id);
            song.likes--;
        },

        removeDislike(id: string) {
            const song = this.findSong(id);
            song.dislikes--;
        },
    },
    getters: {
        topTenPopular: (state) =>
            state.songs
                .sort((a, b) =>
                    a.likes - a.dislikes < b.likes - b.dislikes ? 1 : -1
                )
                .slice(0, 10),
    },
});
