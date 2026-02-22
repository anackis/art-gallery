import { useNavigate } from "react-router-dom";
import { ArtObject } from "../../../interfaces/apiTypes";

interface GalleryCardProps {
  art: ArtObject;
  onReplace: () => void;
  isReplacing: boolean;
  isHighlighted?: boolean;
}

export const GalleryCard = ({
  art,
  onReplace,
  isReplacing,
  isHighlighted = false,
}: GalleryCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/art/${art.objectNumber}`);
  };

  return (
    <div className={`gallery-card ${isHighlighted ? "gallery-card-highlighted" : ""}`}>
      <div className="gallery-card-img-wrapper">
        {art.webImage.url ? (
          <img src={art.webImage.url} alt={art.title} onClick={handleClick} />
        ) : (
          <div className="gallery-card-no-image">
            <div onClick={handleClick}>IMG Not provided by API</div>
            <button
              className="gallery-card-replace-button"
              onClick={onReplace}
              disabled={isReplacing}
            >
              {isReplacing ? "Loading..." : "Find another"}
            </button>
          </div>
        )}
      </div>
      <div className="gallery-card-title">
        <div className="gallery-card-title-wrapper">{art.title}</div>
      </div>
    </div>
  );
};
