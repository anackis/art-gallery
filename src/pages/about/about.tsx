import "./about.scss";

export const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about-wrapper">
          <div className="about-content">
            <h1>About This Project</h1>
            <br />
            <h2>Project Overview</h2>
            <br />
            <p>
              This application demonstrates integrating external APIs into a
              React-based project, specifically using the Metropolitan Museum of
              Art Collection API. The API provides access to a rich repository
              of artworks and metadata, leveraged here to create a dynamic and
              responsive art gallery application.
            </p>
            <br />
            <h3>Technical Highlights</h3>
            <br />
            <p>
              - API Integration: Utilizes the Metropolitan Museum of Art public
              API to fetch and display artworks dynamically. Random paintings
              are loaded from the collection, with detailed metadata including
              artist, date, culture, medium, and classification.
              <br />
              <br />
              - Responsive Design: Features a clean aesthetic that adapts
              smoothly across different devices, with a slider on smaller
              display resolutions for an optimal user experience.
              <br />
              <br />
              - Modern Tech Stack: Built with React 18, TypeScript, React
              Router, and SCSS modules, following best practices for component
              architecture and custom hooks.
              <br />
              <br />
              The application showcases fundamental competencies in API
              integration, TypeScript typing, frontend design, and responsive
              layout creation, translating API data into a visually appealing
              and user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
