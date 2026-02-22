# Art Gallery

Art gallery web application built with React and TypeScript, showcasing artworks from the Metropolitan Museum of Art collection via their public API.

## Features

- **Random artwork discovery**: Load random paintings from the Met's collection
- **Detailed artwork view**: View high-resolution images with comprehensive metadata (artist, date, culture, medium, etc.)
- **Full-screen image viewer**: Click images to view them in full-screen mode
- **Responsive design**: Adaptive layout with a slider on mobile devices
- **Client-side routing**: Smooth navigation between pages

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 4.9.5** - Type safety
- **React Router 6.26.2** - Client-side routing
- **SCSS** - Styling with CSS modules pattern
- **React Slick** - Carousel/slider for responsive layouts
- **Metropolitan Museum of Art API** - Art data source

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation bar
│   └── full-img-viewer/ # Full-screen image modal
├── pages/              # Route components
│   ├── main-gallery/   # Main gallery page with artwork grid
│   ├── art-detail/     # Individual artwork detail page
│   └── about/          # About page
├── hooks/              # Custom React hooks
│   ├── useArtworks.ts  # Fetch random artworks
│   └── fetchArtDetails.ts # Fetch single artwork details
├── interfaces/         # TypeScript type definitions
├── constants/          # API configuration
└── utils/              # Helper functions (API response mapping)
```

## API Integration

The application uses the [Metropolitan Museum of Art Collection API](https://metmuseum.github.io/):

- **Search endpoint**: `/search?hasImages=true&q=painting` - Find painting object IDs
- **Object endpoint**: `/objects/{objectID}` - Get detailed artwork information

Data mapping extracts and formats:

- Artist biography
- Object date
- Culture and period
- Medium and classification
- Department
- Credit line

## Key Implementation Details

- **Custom hooks pattern**: Separation of data-fetching logic from UI components
- **Image preloading**: Prevents layout shifts when loading detail page images
- **Error boundaries**: Graceful error handling for failed API requests
- **TypeScript interfaces**: Strict typing for API responses and component props
- **SCSS modules**: Scoped styling to prevent class name collisions

## Screenshots

![1](https://github.com/user-attachments/assets/bd25fa9c-f8b5-4558-a157-063429bf2da1)

![2](https://github.com/user-attachments/assets/5ed9df9f-9103-4855-b1f0-e8fdceac8f14)

![3](https://github.com/user-attachments/assets/b8dc2e9c-49a0-47dd-8541-99eaecf7c7d1)

![4](https://github.com/user-attachments/assets/3a7c8b22-0461-46c6-af9e-98ae23439375)

![5](https://github.com/user-attachments/assets/d6c2f791-b5d3-42a5-bd8f-d5c7408d57eb)

![6](https://github.com/user-attachments/assets/6ffcab2d-6172-4745-9726-a0bd9a28025d)

![7](https://github.com/user-attachments/assets/c6ef6bed-622d-4b24-a90e-53db40520d7b)

![8](https://github.com/user-attachments/assets/171cef76-8d35-459c-a54c-d33405cc3af6)



