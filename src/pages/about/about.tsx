import './about.scss'; 

const About = () => {
	 return (
	 <div className="container">
			<div className="about">
				<div className="about-wrapper">
					<h1>About This Project</h1>
					<br />
					<h2>Project Overview</h2>
					<br />
					<p>This application is a demonstration of integrating external APIs into a React-based project, specifically using the Rijksmuseum API. The API provides access to a rich repository of art and metadata which has been leveraged here to create a dynamic and responsive art gallery application.</p>
					<br />
					<h3>Technical Highlights</h3>
					<br />
					<p>
						- API Integration: Utilized the Rijksmuseum Object metadata APIs to fetch and display artworks dynamically. This API is known for its robust dataset and ease of use, which allowed for rapid development and integration.
						<br /><br />
						- Responsive Design: Focused on creating a simple yet warm aesthetic that adapts smoothly across different devices including slider on smaller display resolutions, ensuring a seamless user experience.
						<br /><br />
						- Development Timeline: This project was conceptualized and completed within a span of one day, emphasizing efficient planning and effective execution.
						Reflections
						<br /><br />
						While the features implemented in this task are straightforward, they demonstrate fundamental competencies in API integration, frontend design, and responsive layout creation. I enjoyed the challenge of translating API data into a visually appealing format and ensuring the application is user-friendly and informative.
					</p>
				</div>
			</div>
		</div>
	 );
}

export default About;