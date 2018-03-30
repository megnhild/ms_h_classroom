# CodeLou_FrontEnd

## Description
```
This is a website for my classroom. Students and parents can use it to find information about my educational experience and background as well as ways to contact me. I also included a section for students to use that can be updated to include helpful videos based on the current topic we are learning.

DIRECTIONS: To view my site you can either open index.html from my repository or go to https://megnhild.github.io/ms_h_classroom/

```



## Custom CSS Classes
```
The class(es) I created are:

1. .main-header
    This class made the navbar stick to the top of the page when scrolling. It keeps the navbar at 100% width of the page no matter the size of the screen. The z-index makes sure it runs over the main page content when scrolling. It also styles the font color and size.

2. .main-nav
    This class creates a flexbox display for the navbar items excluding the name Ms. Hildabrand. This allows the about me, resources, and contact me items to display in a row at the center of the navbar.

3. .sticky
    This class is added using a JavaScript function. It changes the background of the navbar and a shadow box to add dimension to the sticky navbar. The ".sticky a" class changes the color of the navbar items when scrolling. The ".sticky a:hover" changes the color of the navbar items when hovering after scrolling.

```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. scrollFunction() 
    This function adds the sticky class to the header when you scroll and removes the sticky class when you leave the scroll.

2. plusSlides()
    This add functionality to the previous and next arrows on the video scroll in the Resources section of my page. When the arrow is clicked it will load the next video.

3. showSlides()
    This shows the slide that you are currently on and hides the other slides based on the slideIndex (through the for loop).
