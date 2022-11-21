export interface HubLink {
  label: string;
  url: string;
  img: string;
  visible: boolean;
  catagory: Catagory
}

export type Catagory = "Movies and Series" | "TV Channels" | "Sport";