# Project Description

This project is a frontend application built with React, aimed at displaying images with optimized rendering and smooth navigation.

## Running the Project

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm run analyze`

Analyzes the bundle size for optimization.

## Design Decisions

1. **Image Rendering Optimization**: The project uses `react-blurhash` to optimize image rendering. This ensures users see a blurred version of the image while the full image is loading, providing a smooth experience, especially when dealing with many images.

2. **State Management and Routing**: Initially, I implemented the `PhotoDetails` component as a modal to maintain the grid state. However, the task required using `react-router-dom`, so I refactored it into a separate page to meet the specifications.

---

It was a joy working on this project! I aimed for a balance of performance, usability, and clean design. I hope you find it as enjoyable to explore as I did to build! 🚀
