# Fresher Frontend (React + Vite + Bootstrap)

This is a small starter frontend built with React, Vite and Bootstrap.

## Scripts

- npm install
- npm run dev (starts vite on http://localhost:5173)
- npm run build
- npm run preview

## Backend API

The example Products page tries to fetch from `${VITE_API_URL}/products`.
You can set an environment variable in `.env` for development, for example:

VITE_API_URL=http://localhost:3000

If you don't have the backend running, Products page will show a message.

## Notes

- Bootstrap CSS is imported globally.
- Router uses `react-router-dom` with two pages: Home and Products.
