export interface ArtObject {
  id: string;
  title: string;
  webImage: { url: string };
  objectNumber?: string; 
  description?: string; 
}

export interface DetailedArtObjectResponse {
  artObject: ArtObject;
  error?: string;
}

export interface APIResponse {
  artObjects: ArtObject[];
}
