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

![2](https://github.com/user-attachments/assets/3083a149-9b28-4d33-ba8b-6c5ea7c7796f)

![3](https://github.com/user-attachments/assets/f701c774-b9cc-466f-a832-4ae11d10608c)

![4](https://github.com/user-attachments/assets/dd3002b3-a37e-4d15-94e0-dc28f137fc90)

![5](https://github.com/user-attachments/assets/d365f27c-68ff-4a73-8123-e5b5969eab49)

![6](https://github.com/user-attachments/assets/0d1ad1e1-d4a5-46dc-892d-86847f9ca2d5)

![7](https://github.com/user-attachments/assets/df352f6c-728e-4fc0-8320-3f29a036ed3f)

![8](https://github.com/user-attachments/assets/28eb92dc-36d3-4689-aa15-53e78e15603b)
