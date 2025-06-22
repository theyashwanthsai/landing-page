# TuriLabs Landing Page

A modern, responsive landing page for TuriLabs featuring AI research, newsletter subscriptions, and interactive components.

## Features

### Newsletter System
- **Newsletter Subscription**: Integrated Brevo form for email subscriptions
- **Past Newsletters**: Displays newsletter articles from the [Turi-Labs Newsletter Repository](https://github.com/Turi-Labs/Newsletter-Editor-Agents/tree/main/newsletter)
- **Article Viewer**: Individual article pages with proper HTML rendering and styling
- **Responsive Design**: Mobile-friendly newsletter grid layout

### Key Components
- **NewsletterPage**: Main newsletter page with subscription form and article grid
- **NewsletterArticles**: Component displaying all available newsletter articles
- **NewsletterArticlePage**: Individual article viewer with navigation
- **NewsletterService**: Service for fetching articles from GitHub API

## Newsletter Integration

The newsletter system integrates with the GitHub repository at `https://github.com/Turi-Labs/Newsletter-Editor-Agents/tree/main/newsletter` to:

1. **Fetch Articles**: Uses GitHub API to retrieve HTML newsletter files
2. **Display Grid**: Shows articles in a responsive card layout with dates and titles
3. **Individual Viewing**: Click any article to view it in a dedicated page
4. **Proper Styling**: Renders HTML content with custom prose styling for dark theme

## Routes

- `/newsletter` - Main newsletter page with subscription form and article grid
- `/newsletter/article/:articleName` - Individual article viewer

## Technologies Used

- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- GitHub API for newsletter content
- Brevo for email subscriptions

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Newsletter Article Format

Newsletter articles are expected to be HTML files in the GitHub repository with the following naming convention:
- `YYYY-MM-DD-newsletter.html` (e.g., `2024-01-15-newsletter.html`)

The system automatically:
- Extracts dates from filenames
- Sorts articles by date (newest first)
- Formats dates for display
- Handles HTML content rendering with proper styling 