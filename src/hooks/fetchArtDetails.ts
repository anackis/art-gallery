import { useState, useEffect } from "react";
import { ArtObject } from "../interfaces/apiTypes";
import { API_BASE_URL } from "../constants/api";
import { mapArtObject } from "../utils/mapArtObject";
import { artworksCache } from "../utils/artworksCache";

const preloadImage = (url: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = url;
  });

export const useFetchArtDetails = (objectNumber: string) => {
  const [artDetail, setArtDetail] = useState<ArtObject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!objectNumber) return;

    const cachedData = artworksCache.get(objectNumber);
    if (cachedData) {
      setArtDetail(cachedData);
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchDetails = async () => {
      try {
        const obj = await fetch(`${API_BASE_URL}/objects/${objectNumber}`).then(
          (r) => r.json(),
        );

        const artData = mapArtObject(obj);

        if (artData.webImage.url) await preloadImage(artData.webImage.url);

        artworksCache.set(objectNumber, artData);

        setArtDetail(artData);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setArtDetail(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [objectNumber]);

  return { artDetail, isLoading, error };
};
