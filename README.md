# o-tech-test
**Tech Test for OLIO**  

**TO RUN:**
Install Node.js if you haven't got it already - https://nodejs.org/en/
Clone this git repository into a folder of your choice.
Open a command prompt in the new *o-tech-test* folder and enter "npm i"
This will install everything that the app needs into the node_modules folder.
Then enter "npm start" to run the app. If it doesn't load in the browser automatically, go to http://localhost:3000/ in a browser.

**Process**

Started by reading the spec, to make sure I had a good understanding of what I needed to do.
Had a look at the data, could see it was made up of “articles” and was similar data to the OLIO app.

Kicked off a react project by using create-react-app. In a real production situation I would probably spend more time on this step, or eject it and alter the webpack / babel setup from there.

Made the decision to use Typesecript, so that the objects I’m passing around would be well defined and it would be clearer to follow, and flag up any bugs quicker. For something like this it might not be completely necessary, but I treated this like a project that would grow and become a lot larger than this task.

**Actions / getArticles.ts**  
First goal was to get the data and display it on screen somehow. Used axios to get the data from the url and return it. Set this up in a file that the whole app could share, and wrote a quick test to check it was returning data.

**features/Articles/article-model.ts**  
Then I went about setting up the structure for the articles. Defined the article model using the fields I wanted to display.

**/Articles.container.tsx**  
Set up the structure for the listing page. Started with the container which will go and get the data and pass it down to the child components.

useEffect hook to get the data on page load. Asynchronous call because we don’t know how quick the data will be returned. It’s currently a .json url but could well be an api call in the future.

Keep the whole list of articles in state and show a filtered view, so we can switch back to the original data when we need to.

**/ArticleList.tsx**  
Pretty simple component that either displays either the list of Articles, or an individual Article in detail view. Pass the articles, status and click/close functions in from the container and then down to the child components.

**/Article.tsx**  
This is what gets displayed in the list view. Takes in a single Article, as defined in article-model and displays it. It is wrapped in a button, which when clicked sets the article as open and changes the read status. Shows a “NEW” label if the article has not been read.
Wrote a quick test to check that the component displays the data passed to it.

**/ArticleDetails.tsx**  
If the article is open then this component shows. It has a larger image and more detailed information. I was hoping to add the map view on here using the coordinate data, but ran out of time.

**/shared/components/Card/Card.tsx**  
This is a simple wrapper which goes around both the Article and ArticleDetail components, but could well be usful around the app for adding consistent styling to the “card” like components.
It simply wraps an html article element around the children, adding a class with styling, but also allowing additional classes to be added.

**/CardImage.tsx**  
Rather than show the <img> which could be unpredictable in size, I made a component to show an image in a desired size, with the background image stretched over it. This isn’t perfect, and wouldn’t work for really wide landscape photos, but as a quick solution it’s okay.

**Styling**  
I have used css modules to control and separate the styling of the app and individual components. 

**App.module.scss**  
Has some global classes for margin spacing, along with simple typography.

**/shared/styles/helpers.scss**  
Variables for spacers and colours, also a function that converts px to rems.

** *.module.scss**  
Individual styles for components. These classes will get appended with a random string to make them unique, so there are no clashes. 


**IMPROVEMENTS**  

I was hoping to add the map in there, partly to have a go using MapBox as it looks really interesting and previously I’ve only used Google Maps which can be quite bloated.

More testing. In production we would likely set up something like Cypress to test the journey and interactions, or simpler snapshot testing.

I would also set up Storybook early on in the project, to help keep track of what components we had and help test them.

There might well be some reorganisation of the folder and file structure as it grew as well. It might be that Article becomes more generic and there are further components for other list items. Also if we start having more api calls we might want to organise that section into a better structure.

Routing - We only really have a couple of pages at the moment, but any more and we probably want to set up some sort of routing. I would probably use react-router as that’s what I’m familiar with.




