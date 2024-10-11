import { useParams, useNavigate } from 'react-router-dom';
import { useFetchArtDetails } from '../../hooks/fetchArtDetails';
import './art-detail.scss';
import spinner from '../../assets/icons/spinner.svg';
import FullImgViewer from '../../components/full-img-viewer/full-img-viewer';
import { useState } from 'react';

const ArtDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { artDetail, isLoading, error } = useFetchArtDetails(id || '');
	const [showFullImg, setShowFullImg] = useState(false);

	const openFullImg = () => setShowFullImg(true);
  const closeFullImg = () => setShowFullImg(false);

	return (
		<>
			<div className="art-container">
				<button className='art-button' onClick={() => navigate(-1)}>Back to Gallery</button>

				{isLoading ? (
					<div className="loading">
						<img src={spinner} alt="Loading..." style={{ marginTop: '50px' }}/>
					</div>
				) : error ? (
					<div className='error'>Error: {error}</div>
				) : artDetail ? (
					<div className='art-wrapper'>
						<div className="art-wrapper-img" onClick={openFullImg}>
							<img src={artDetail.webImage.url} alt={artDetail.title} />
						</div>
						<div className="art-wrapper-text">
							<h1>{artDetail.title}</h1>
							<p>{artDetail.description || 'No description available'}</p>
						</div>
					</div>
				) : (
					<p>No art details available.</p>
				)}
			</div>

			{showFullImg && <FullImgViewer url={artDetail?.webImage.url} onClose={closeFullImg} />}
		</>
	);
};

export default ArtDetail;
