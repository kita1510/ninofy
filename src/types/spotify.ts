//https://github.com/alehuo/spotti/blob/master/src/services

type Image = {
  height: number | null;
  width: number | null;
  url: string;
};
export interface Playlist {
  collaborative: boolean;
  description: string;
  id: string;
  images: Image[];
  name?: string;
  primaryColor: null | string;
  public: boolean;
  tracks: Tracks;
  follower: PlaylistFollowers;
}

type PlaylistFollowers = {
  total: number;
  href: string;
};

export interface Tracks {
  href: string;
  items: TrackItem[];
  limit: number;
  offset: number;
}

export interface TrackItem {
  addedAt: string;
  addedBy: Omit<Owner, "displayName">;
  isLocal: boolean;
  primaryColor: string;
}

export interface Owner {
  id: string;
  displayName: string;
  type: "user" | "admin";
}
