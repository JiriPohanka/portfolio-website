# Portfolio Website

This is my portfolio website (live preview on https://jiripohanka.github.io/portfolio-website/). Which I built completely from scratch using ReactJS, tailwindCSS, styled-components and few other 'minor' libraries.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshots

![](./screenshots/screenshot-desktop-light.jpg)
![](./screenshots/screenshot-desktop-dark.jpg)
![](./screenshots/screenshot-mobile-dark.jpg)
![](./screenshots/screenshot-mobile-light.jpg)

### Links

- Solution URL: (https://github.com/JiriPohanka/react-todolist)
- Live Site URL: (https://614c49adcd0a68a8d63be012--ecstatic-wing-ce01dc.netlify.app/)

## My process

### Built with

- styled-components
- tailwindCSS
- [React](https://reactjs.org/) - JS library

### What I learned

A lot as always. To sum up in points.

## Time estimates
My estimates as to how long implementation of even basic things generally tend to be wrong. I am always on the short side. Things tend to get unpredictably complicated (for example because of conflict between used libraries). 

## Theming
First app I've created that allows the user to switch between darkmode and lightmode. I mainly used ThemeContext from styled-components for this.

## Styled-components vs. tailwindCSS
At first I wasn't sure when to use one or the other. I like the quick styling of tailwind but sometimes I feel like styled-components give me more control over CSS.

## Delayed animation on component unmount (React)
When using React, I prefer keeping it pure and not mixing vanilla JS approach with how I imagine things should be solved 'the react way'. This time, I learned how to create my own hook to delay unmount (when conditionally rendering a component) of a component so that the css animation can finish first and I like this better than my standard approach of document.querySelector('p').classList.add('hidden') etc.


### Continued development

In terms of this project, in the future I would consider adding user accounts and storing tasks in database using Firebase. As of now, the data is only stored in localStorage.

Also, I built this app without any css prepocessors. In further projects, I am going to use SASS in order to expand my knowledge of CSS. Moreover, I think I want to read more about how to structure CSS to avoid spaghetti code.

This was my first app using ReactJS. My plan is to continue creating in ReactJS, start using Redux as well and maybe some ReactJS framework such as Gatsby or NextJS.

### Useful resources

- [FreeCodeCamp - drag and drop guide](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/) - This article helped me easily implement drag and drop functionality. I really liked this pattern and will use it going forward.

## Author

I am an aspiring all-self-taught Front-End Web Developer. I only started learning about 4 months ago (May, 2021) but I love it. I strive for excellency.

- Frontend Mentor - [@jiripohanka](https://www.frontendmentor.io/profile/JiriPohanka)
- GitHub - [@jiripohanka](https://github.com/JiriPohanka)
