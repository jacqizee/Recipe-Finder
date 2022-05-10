# Project 2: RecipeFinder

## Overview
This was the second project for the Software Engineering Immersive course with GA, which consisted of a hackathon over the course of a day and a half. I was paired with [jduligowski](https://github.com/jdkuligowski), and together we worked to plan, wireframe, and code the website before presenting it live over Zoom.

You can find the deployed version of our project [here](https://find-din-recipes.netlify.app/).

![RecipeFinder Preview](./src/images/ReadMe/RecipeFinder.gif)

## Navigation

* [Brief](#the-brief)
* [Technologies Used](#technologies-used)
* [Approach](#approach)
* [Reflection](#reflection)
* [Future Features](#future-features)
* [Credits](#credits)

## The Brief

**Timeframe:**
* <36 hours

**General Project Brief:**
* Consume a public API – this could be anything but it must make sense for your project
* Have several components - At least one classical and one functional
* The app should include a router - with several “pages”
* Include wireframes - that you designed before building the app
* Be deployed online and accessible to the public

## Technologies Used
**Languages:**
* JavaScript (ES6+)
* React & React Router
* HTML5 & CSS3
* Sass
* Bootstrap
* Axios
* [The MealDB API](https://www.themealdb.com/api.php)

**Dev Tools:**
* VSCode
* Eslint
* Git & GitHub
* Insomnia

## Approach
We started this project out by first spending time to pick a suitable API for this project. We were limited to free APIs, and were also conscious of any APIs with strict rate limiting and tight limits, as this was only a two day project so we knew we would be making a lot of requests. We found the MealDB API and as a huge fan of cooking myself, this seemed like a perfect API to build a project around.

### Planning: Features
We used MoSCoW (Must-Have, Should-Have, Could-Have, and Won't-Have) as a base for planning the features for our project, and decided these were the main features we hoped to implement:
* Must-Have
  * Homepage
* Should-Have
  * Detailed recipe page
  * Cuisine and Category pages
* Could-Have
  * Search bar
  * Random recipe button
  * Saving recipe favorites on local memory

### Planning: Wireframing

Next, we wireframed a general plan for how we wanted the site to look, and what the website flow would look like. We highlighted our "Could-Have" features in red.

![FoodFinder Wireframe](./src/images/ReadMe/Wireframe.png)

### Coding

* We pair-coded the core features of the website, but then worked separately on certain features to make sure we maximized the use of our time given the short time frame, such as divying up the styling of different pages, and working on different features separately.
  * My partner worked to pull images from the CountryFlags API that we could use on our "Cuisines" page, as The MealDB did not provide any images. My partner also worked to roll out the search bar feature across several pages for a consistent experience across both the Category and Cuisine pages.
  * On my end, I worked to implement the random buttons on both the homepage and the navbar, as well as the storage of favorites on local memory and ensuring sure the heart button on the recipe page was reflective of whether or not the recipe was already saved to favorites or not.

## Reflection

### Challenges

Working within a very short time frame meant really prioritizing certain aspects over others, such as working to implement core features for the user over other aspects that aren't a top priority. For me, this was reduced time spent on styling and more time on refining and de-bugging any features we added to make sure everything is in working order for our MVP.

### Key Learnings


## Future Features

If we had more time, we would have loved to incorporate additional features, like:
* Recipe search by ingredient - allowing users to filter for recipes given 1-5 ingredient inputs.

## Credits:

* API
  * [The MealDB](https://www.themealdb.com/)

* Images
  * Flags on "Cuisines" Page - [CountryFlags API](https://www.countryflagsapi.com/)
  * Favicon - [FlatIcon](https://www.flaticon.com/free-icon/book_1721455?term=recipe%20book&page=1&position=37&page=1&position=37&related_id=1721455&origin=search)

* Fonts
  * Poppins - [Google Fonts](https://fonts.google.com/specimen/Poppins)
