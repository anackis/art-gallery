export interface ArtObject {
  id: string;
  title: string;
  webImage: { url: string };
  fullImage?: { url: string };
  objectNumber?: string;
  description?: string;
}
