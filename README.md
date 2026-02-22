# Art Gallery

Art gallery web application built with React and TypeScript, showcasing artworks from the Metropolitan Museum of Art collection via their public API.

## Features

- **Random artwork discovery**: Load random paintings from the Met's collection
- **Detailed artwork view**: View high-resolution images with comprehensive metadata (artist, date, culture, medium, etc.)
- **Full-screen image viewer**: Click images to view them in full-screen mode
- **Responsive design**: Adaptive layout with slider on mobile devices
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

![1](https://github.com/user-attachments/assets/5b3e4a40-84f9-4879-aa20-222c4afa1afc)

![2](https://github.com/user-attachments/assets/8acb835e-65c3-46aa-97c4-ea535d9aeaa6)

![3](https://github.com/user-attachments/assets/f2b9b849-9e90-4197-ac02-6ca2279b4a78)

![4](https://github.com/user-attachments/assets/db1e3b11-8ed1-4de7-b3a7-d3bfeb0009f8)

![5](https://github.com/user-attachments/assets/fb5815f6-0355-457e-95b6-7a32b8b01f87)
