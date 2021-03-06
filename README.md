## About

Let photos you like help you find the right color palette for your project. A user can browse automatically loaded photos or can search for specific photos. When an image is clicked on, the dominant 6 colors are extracted and displayed, allowing the user to copy and paste these HEX codes directly into their project. 

## What's really going on?

**grommet-** used to create the UI. The components from its library make it easy to create a responsive layout. Grommet is an open-source project run by HPE.

**unsplash-** used to pull the images that populate the layout. On the home page, a random selection of images categorized by Unsplash as "featured" are displayed. However, a specific topic can also be searched for using the search bar. In all cases, the images displayed are coming from Unsplash. The user who uploaded the image is credited on the page that loads when an image is clicked on.

**react-color-extractor-** npm package used to extract six dominant colors from a selected image.


## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
