import { useState } from "react";
import { ArtObject } from "../interfaces/apiTypes";
import { API_BASE_URL, DEFAULT_ARTWORKS_COUNT } from "../constants/api";
import { mapArtObject } from "../utils/mapArtObject";
import { artworksCache } from "../utils/artworksCache";

let galleryCache: ArtObject[] | null = null;

export const useArtworks = () => {
  const [data, setData] = useState<ArtObject[] | null>(() => galleryCache);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [replacingIds, setReplacingIds] = useState<string[]>([]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { objectIDs } = await fetch(
        `${API_BASE_URL}/search?hasImages=true&q=painting`,
      ).then((r) => r.json());

      if (!objectIDs?.length) {
        setData([]);
        return;
      }

      const randomIds = Array.from(
        { length: DEFAULT_ARTWORKS_COUNT },
        () =>
          objectIDs[
            Math.floor(Math.random() * Math.min(objectIDs.length, 1000))
          ],
      );

      const objects = await Promise.all(
        randomIds.map((id) =>
          fetch(`${API_BASE_URL}/objects/${id}`).then((r) => r.json()),
        ),
      );

      const artworks = objects.map(mapArtObject);
      artworks.forEach((artwork) => {
        if (artwork.objectNumber) {
          artworksCache.set(artwork.objectNumber, artwork);
        }
      });
      galleryCache = artworks;
      setData(artworks);
    } catch (error: any) {
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const replaceSingleArtwork = async (artworkId: string) => {
    if (!data) return;

    setReplacingIds((prev) => [...prev, artworkId]);

    try {
      const { objectIDs } = await fetch(
        `${API_BASE_URL}/search?hasImages=true&q=painting`,
      ).then((r) => r.json());

      if (!objectIDs?.length) return;

      const randomId =
        objectIDs[Math.floor(Math.random() * Math.min(objectIDs.length, 1000))];

      const newObject = await fetch(`${API_BASE_URL}/objects/${randomId}`).then(
        (r) => r.json(),
      );

      const newArtwork = mapArtObject(newObject);
      if (newArtwork.objectNumber) {
        artworksCache.set(newArtwork.objectNumber, newArtwork);
      }

      const updatedData = data.map((artwork) =>
        artwork.id === artworkId ? newArtwork : artwork,
      );

      galleryCache = updatedData;
      setData(updatedData);
    } catch (error: any) {
      console.error("Failed to replace artwork:", error);
    } finally {
      setReplacingIds((prev) => prev.filter((id) => id !== artworkId));
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
    replaceSingleArtwork,
    replacingIds,
  };
};
