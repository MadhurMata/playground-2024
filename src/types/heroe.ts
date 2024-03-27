export interface Hero {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  description: string;
  modified: number;
  events: Events;
}

interface Thumbnail {
  extension: string;
  path: string;
}

export interface Events {
  available: number;
  items: EventItem[];
}

export interface EventItem {
  resourceURI: string;
  name: string;
}
