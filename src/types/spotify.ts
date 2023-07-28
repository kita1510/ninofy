//https://github.com/alehuo/spotti/blob/master/src/services

export interface Image {
  height: number | null;
  width: number | null;
  url: string;
}
export interface Playlist {
  collaborative: boolean;
  description: string;
  id: string;
  images: Image[];
  name: string;
  primary_color: null | string;
  public: boolean;
  tracks: {
    href: string;
    total: number;
  };
}


