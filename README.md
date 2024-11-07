# Meme Generator

A simple React-based meme generator application that allows users to customize memes by adding and editing text on images. Users can save their creations as JPEG files.

## Features

- **Image Selection:** Users can select images from a list of popular memes fetched from an external API.
- **Add Text:** Add multiple text boxes to the meme with customizable positions.
- **Editable Text:** Double-click to edit text boxes with ease.
- **Draggable Text:** Move text boxes around on the image for precise positioning.
- **Save as JPEG:** Export your final creation as a JPEG image.
  
## API

The project uses the [Imgflip API](https://api.imgflip.com/get_memes) to fetch a list of popular meme templates.

## Libraries Used

- **React** - JavaScript library for building user interfaces
- **React Router** - For routing within the app
- **React Bootstrap** - For styled components
- **React Draggable** - To make text boxes draggable
- **react-component-export-image** - To export the meme as a JPEG image

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/meme-generator.git
   cd meme-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Home Page:** Browse and select a meme template from the available options.
2. **Edit Page:**
   - **Add Text:** Click the **Add Text** button to insert new text boxes.
   - **Edit Text:** Double-click on any text box to edit the text.
   - **Drag Text:** Move the text box around by dragging it to the desired position.
   - **Save Meme:** Click the **Save** button to export your meme as a JPEG image.



## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
