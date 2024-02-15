## Introduction

Welcome to the TV Show App! This repository contains a frontend application designed to provide users with a seamless experience of exploring and discovering their favorite TV shows. Leveraging an open TV shows API provided by [TV Maze](http://www.tvmaze.com/api), this app brings you a curated selection of popular TV shows across various genres, right at your fingertips.

## Requirements

The application allows users to:

* View popular TV shows based on different genres (e.g., drama, comedy, sports).
* Click on a TV show to view its details on another screen.
* Search for a TV show to get its details.
* Experience a responsive and mobile-friendly interface.
* Enjoy a simple yet eye-catching UI design.

## Architecture

The application is built using Vue.js version 3.4.15, a progressive JavaScript framework for building user interfaces.The application architecture follows best practices to ensure clean code, reusability, and maintainability. For conecction between component use managing shared state

Key architectural decisions:

* **Vue.js**: Chosen as the frontend framework for its simplicity and scalability.
* **Responsive Design**: Utilizes CSS media queries and flexible layouts for responsiveness across devices.
* Swipe.js library thats provide sliders for better UI
* **Component-based Architecture**: Encourages reusability and modularity through the use of Vue components.
* **RESTful API**: Utilizes the TV Maze API to fetch TV show data.
* **Webpack**: Used for bundling and managing dependencies.
* **Unit Testing**: Includes unit tests to ensure the reliability of components and functionality.

# Instractions

### Prerequisites

* Vue.js 3.4.15
* NPM 10.4.0

### Running the Application

Clone the repository:

```
git@github.com:Kbac-andrey/TV-shows.git
```


Navigate to the project directory:

```
cd TV-shows 
```

3. Install dependencies:

npm instal4. Run the application:

```sh
npm run dev
```

## Additional Features

* **Pagination**: Implement Slider for pagination and responsable page
* **Sorting**: TV Shows sorting based on rating,
* **Filtering** by genre.
* **search** TV Show

## Additional Features

- Filtering: Enhance user experience by adding functionality to filter TV shows by rating, year, and other criteria.
- Favorite Shows: Allow users to mark their favorite shows and save them for later viewing.
- Watchlist: Allow users to create a watchlist of shows they intend to watch.
- More Unit Tests: Expand test coverage to ensure the robustness of the application.

## Conclusion

The TV Show App aims to deliver an immersive experience for users passionate about TV shows. It is the first project for me on Vue.js v3. So I waiting for feedback first project in Vue.js V3 please feel free contact me.
