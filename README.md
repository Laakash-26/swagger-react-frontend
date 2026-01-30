# 💳 Bill Payment API - React Frontend

A React frontend application with Swagger UI integration, similar to the [Bill Payment API practice site](https://gauravkhurana.in/practise-api/).

## Features

- ✅ React frontend with modern UI
- ✅ Swagger UI integration for interactive API documentation
- ✅ Authentication methods display (API Key, Bearer Token, Basic Auth)
- ✅ JSON schemas with copy-to-clipboard functionality
- ✅ Responsive design
- ✅ Clean, professional interface

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode:
```bash
npm start
```

The app will open automatically in your browser at `http://localhost:3000`

### Build for Production:
```bash
npm build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
.
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # Header component with title and description
│   │   ├── Header.css
│   │   ├── AuthSection.js  # Authentication methods section
│   │   ├── AuthSection.css
│   │   ├── SchemaSection.js # JSON schemas section
│   │   ├── SchemaSection.css
│   │   ├── SwaggerUI.js    # Swagger UI wrapper component
│   │   └── SwaggerUI.css
│   ├── App.js              # Main app component
│   ├── App.css             # Main styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
└── README.md               # This file
```

## Features Overview

### Header Section
- Title and description
- Technology badges (Java, Python, C#, Postman, Hoppscotch)
- Links to practice UI and business flow guide

### Authentication Methods
- **API Key Authentication**: `X-API-Key: demo-api-key-123`
- **Bearer Token**: `Authorization: Bearer demo-jwt-token-456`
- **Basic Auth**: `demo:password123` (Base64 encoded)
- Copy buttons for easy access

### JSON Schemas
- User, Bill, Payment, Biller, PaymentMethod, Address, UploadedFile, Error schemas
- Click any schema card to copy JSON
- Copy all schemas functionality

### Swagger UI
- Interactive API documentation
- Loads OpenAPI spec from the reference API
- Test endpoints directly from the UI

## Technologies Used

- **React** - UI library
- **Swagger UI React** - Swagger UI component for React
- **React Scripts** - Build tooling for React

## Customization

### Changing the OpenAPI Spec URL

Edit `src/components/SwaggerUI.js` and update the `openApiSpecUrl` variable:

```javascript
const openApiSpecUrl = 'https://your-api-url.com/openapi.json';
```

### Adding More Schemas

Edit `src/components/SchemaSection.js` and add new schema objects to the `schemas` array.

### Modifying Styles

Each component has its own CSS file:
- `src/components/Header.css`
- `src/components/AuthSection.css`
- `src/components/SchemaSection.css`
- `src/components/SwaggerUI.css`

## License

ISC
