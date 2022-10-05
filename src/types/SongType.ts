export interface SongType {
    songData: SongData;
    likes: number;
    dislikes: number;
}

interface SongData {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceID;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}

interface ResourceID {
    kind: string;
    videoId: string;
}

interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard: Default;
    maxres: Default;
}

interface Default {
    url: string;
    width: number;
    height: number;
}
