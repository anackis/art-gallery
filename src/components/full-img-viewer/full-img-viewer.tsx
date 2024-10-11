import './full-img-viewer.scss'; 

const FullImgViewer = ({ url, onClose }: { url?: string; onClose: () => void }) => {
  return (
    <div className="full-img-viewer">
      <div className="full-img-viewer-backdrop" onClick={onClose}></div>
      <img src={url} alt="Full View" className="full-img-viewer-image" />
      <button className="full-img-viewer-close-button" onClick={onClose}>
          <div className={`full-img-viewer-close-button__line full-img-viewer-close-button__rotate-45 full-img-viewer-close-button__line_white`}></div>
          <div className={`full-img-viewer-close-button__line full-img-viewer-close-button__rotate-minus-45 full-img-viewer-close-button__line_white`}></div>
      </button>
    </div>
  );
};

export default FullImgViewer;
