# Clinton Resources Website

A community resource site for Clinton Town and Clinton Township, New Jersey. The project shows local events, nonprofit resources, points of interest, and contact features using HTML, CSS, and JavaScript.

## What it does
1. Display notable events happening in the community, providing a calander as well as a list to view them
2. Displays a large amount of recources that are availdible in the area, which can be filtered through
3. Displays points of interest with images and descriptions
- Provides a contact page for submitting suggestions or new resources
- Includes an about page with location and history information for Clinton

## Pages

- `index.html` — main landing page + highlight reel
- `html/events.html` — event display
- `html/volunteer.html` — filterable community resources
- `html/poi.html` — points of interest page with local attractions
- `html/contact.html` — contact/suggestion form page
- `html/about.html` — town history + local geography 

## Project structure

- `style.css` — main site styling and layout rules
- `events.css` — styling for the events page
- `events.js` — event objects, page rendering, and filtering logic
- `resources.js` — resource objects and display functions for the volunteer page
- `poi.js` — point-of-interest objects and dynamic location rendering
- `contact.js` — contact form handling
- `contactSub.js` — supplemental contact or submission logic
- `server.js` — local development server powered by Express
- `package.json` — project metadata, dependencies, and start command
- `firebaseServiceKey.json` — private Firebase credentials (do not share publicly)
- `images/` — images used by the site

## Technologies used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js with Express for local serving
- Firebase libraries included for future backend integration

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nebra77/clinton-resources.git
   cd clinton-resources
   ```

2. Install Node dependencies:

   ```bash
   npm install
   ```

3. Start the local server:

   ```bash
   npm start
   ```

4. Open the site in your browser:

   ```text
   http://localhost:3000
   ```

## Usage

- Open the home page to view featured local content.
- Use the navigation links to explore events, resources, POIs, and contact information.
- Select resource categories on the volunteer page to filter available help.
- Browse event listings to see both one-time and recurring programs.

## Notes

- The site is currently static with JavaScript-driven page rendering.
- The local server is configured with Express and CORS for easy development.
