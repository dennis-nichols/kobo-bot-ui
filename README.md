# Kobo Toolbox Support Bot (KoboBot)

A ChatGPT-powered support bot for Kobo Toolbox - a "data collection, management, and visualization platform used globally for research and social good"

## Frontend

The UI is built with [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/), and [React Table](https://react-table-v7.tanstack.com/). The frontend application is hosted on [Vercel](https://vercel.com/).

## Backend

The backend is built with [Python](https://www.python.org/), the [FastAPI](https://fastapi.tiangolo.com/) framework, and the OpenAI API. It is hosted on [Google Cloud Run](https://cloud.google.com/run). See the backend repo [here](https://github.com/dennis-nichols/kobo-chat-api).

## Features

- Chatbot is powered by the GPT-3.5-turbo model
- Context for answers is drawn from data scraped from the Kobo Toolbox Support Pages
- Advantage over ChatGPT is that ChatGPT's training data is only up to date as of September 2021 whereas the data for this app was scraped in March 2023

## Getting started

1. Clone the repository: `git clone https://github.com/<your-username>/kobo-bot-ui.git`
2. Navigate to the project directory: `cd business-search-tool`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Access the application at `http://localhost:3000`

## Deployment

The frontend is hosted on Vercel and the backend is hosted on Google Cloud Run. Follow the documentation for each platform to deploy the application.

## Contributing

This project is open for contributions. Feel free to open an issue or submit a pull request.
