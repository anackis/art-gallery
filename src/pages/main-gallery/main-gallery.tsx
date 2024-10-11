import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main-gallery.scss';
import { useRijksmuseum } from '../../hooks/useRijksmuseum';
import spinner from '../../assets/icons/spinner.svg';
import Slider from "react-slick";

const MainGallery = () => {
	const navigate = useNavigate();
	const { data: artworks, isLoading, error, fetchData } = useRijksmuseum();
	const [isSliderActive, setIsSliderActive] = useState(window.innerWidth < 1440);

	const sliderSettings = {
    // centerMode: true,
    centerPadding: '0px',
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 768,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     slidesToShow: 3,
      //   }
      // },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          // slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ],
  };

	const updateDimensions = () => {
		setIsSliderActive(window.innerWidth < 1440);
	};

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	const handleFetch = () => {
		const randomPage = Math.floor(Math.random() * 10) + 1;
		fetchData({ ps: 3, p: randomPage });
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			handleFetch();
		}, 400); 

		return () => clearTimeout(timer);
	}, []);

	const handleArtClick = (objectNumber: string | undefined) => {
		if (objectNumber) {
			navigate(`/art/${objectNumber}`);
		} else {
			console.error('Object number is undefined');
		}
	};

	const renderGallery = () => {
		if (isLoading) return <div className="loading"><img src={spinner} alt="Loading..." /></div>;
		if (error) return <div className='error'>Error: {error.message}</div>;
		if (!artworks?.length) return <div style={{ fontSize: '20px' }}>No artworks found</div>;

		return artworks?.map((art) => (
			<div key={art.id} className="gallery-card" >
				<div className="gallery-card-img-wrapper">
					<img src={art.webImage.url} alt={art.title} onClick={() => handleArtClick(art.objectNumber)}/>
				</div>
				<p>{art.title}</p>
			</div>
		));
	};

	return (
		<div className="gallery">
				<div className="container">
					<h1>Art Gallery</h1>
					{isSliderActive ? (
						<div className="gallery-slider-wrapper">
							<Slider {...sliderSettings}>{renderGallery()}</Slider>
						</div>
					) : (
						<div className="gallery-wrapper">{renderGallery()}</div>
					)}
				</div>
				<button className='gallery-load-button' onClick={handleFetch} disabled={isLoading}>
 					{isLoading ? 'Please Wait...' : 'Load More'}
 				</button>
		</div>
	);
}

export default MainGallery;





// return (
// 	<div className="gallery">
// 		<div className="container">
// 			<h1>Art Gallery</h1>
			
// 			<div className="gallery-wrapper">
// 				{isLoading ? (
// 					<div className="loading">
// 						<img src={spinner} alt="Loading..." />
// 					</div>
// 				) : error ? (
// 					<div className='error'>Error: {error.message}</div>
// 				) : artworks && artworks.length > 0 ? (
// 					<>
// 						{artworks.map((art) => (
// 							<div key={art.id} className="gallery-card" >
// 								<div className="gallery-card-img-wrapper">
// 									<img src={art.webImage.url} alt={art.title} onClick={() => handleArtClick(art.objectNumber)}/>
// 								</div>
// 								<p>{art.title}</p>
// 							</div>
// 						))}
// 					</>
// 				) : (
// 					<div style={{ fontSize: '20px' }}>No artworks found</div>
// 				)}
// 			</div>
			
// 			<button className='gallery-load-button' onClick={handleFetch} disabled={isLoading}>
// 				{isLoading ? 'Please Wait...' : 'Load More'}
// 			</button>
// 		</div>
// 	</div>
// );