# COSMOS

COSMOS is a cinematic way to explore NASA's Astronomy Picture of the Day.

I wanted it to feel less like a normal API demo and more like receiving a transmission from deep space. The site shows NASA's daily image or video along with its title, date, and explanation.

## Features

* Live NASA Astronomy Picture of the Day data
* Fullscreen image and video display
* Date picker for exploring past APODs
* Custom cinematic interface
* Responsive layout
* Loading and error states
* GitHub Pages deployment

## Built With

* HTML
* CSS
* JavaScript
* Vite
* NASA APOD API
* GitHub Pages

## Running Locally

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project folder:

```env
VITE_NASA_API_KEY=your_nasa_api_key
```

Then run:

```bash
npm run dev
```

## NASA API

COSMOS uses NASA's Astronomy Picture of the Day API to retrieve the image or video, title, date, and explanation.

The API key is stored in an environment variable and is not committed to the repository.

