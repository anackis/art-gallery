import { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArtObject } from "../../../interfaces/apiTypes";
import { SLIDER_SETTINGS } from "../../../constants/slider-settings";
import { GalleryCard } from "./gallery-card";
import spinner from "../../../assets/icons/spinner.svg";

interface GalleryContentProps {
  artworks: ArtObject[] | null;
  isLoading: boolean;
  error: Error | null;
  onReplaceArtwork: (artworkId: string) => void;
  replacingIds: string[];
}

export const GalleryContent = ({
  artworks,
  isLoading,
  error,
  onReplaceArtwork,
  replacingIds,
}: GalleryContentProps) => {
  const [isSliderActive, setIsSliderActive] = useState(
    window.innerWidth < 1440,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1439px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSliderActive(e.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="loading">
          <img src={spinner} alt="Loading..." />
        </div>
      );
    }

    if (error) {
      return <div className="error">Error: {error.message}</div>;
    }

    if (!artworks?.length) {
      return <div className="no-artworks">No artworks found</div>;
    }

    const galleryCards = artworks.map((art, index) => (
      <GalleryCard
        key={art.id}
        art={art}
        onReplace={() => onReplaceArtwork(art.id)}
        isReplacing={replacingIds.includes(art.id)}
        isHighlighted={index === 1}
      />
    ));

    return isSliderActive ? (
      <Slider {...SLIDER_SETTINGS}>{galleryCards}</Slider>
    ) : (
      galleryCards
    );
  };

  return isSliderActive ? (
    <div className="gallery-slider-wrapper">{renderContent()}</div>
  ) : (
    <div className="gallery-wrapper">{renderContent()}</div>
  );
};
