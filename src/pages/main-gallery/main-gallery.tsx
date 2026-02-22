import { useEffect } from "react";
import { useArtworks } from "../../hooks/useArtworks";
import { GalleryContent } from "./parts/gallery-content";
import "./main-gallery.scss";

export const MainGallery = () => {
  const {
    data: artworks,
    isLoading,
    error,
    fetchData,
    replaceSingleArtwork,
    replacingIds,
  } = useArtworks();

  useEffect(() => {
    if (!artworks) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetch = () => {
    fetchData();
  };

  return (
    <div className="gallery">
      <div className="container">
        <h1>Art Gallery</h1>
        <GalleryContent
          artworks={artworks}
          isLoading={isLoading}
          error={error}
          onReplaceArtwork={replaceSingleArtwork}
          replacingIds={replacingIds}
        />
      </div>
      <button
        className="gallery-load-button"
        onClick={handleFetch}
        disabled={isLoading}
      >
        {isLoading ? "Please Wait..." : "Load More"}
      </button>
    </div>
  );
};
