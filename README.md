<h1 align="center">Rock-Paper-Scissors-Lizard-Spock Game</h1>


## <U>**Introduction**</U>
I first became aware of the game like a lot of people when I viewed it on an episode of the american comedy show 'The Big Bang Theory'. The game is based on the original game of chance named Rock, Paper Scissors. This game adds two extra options named 'lizard' and 'spock'. Each image is assigned a hand signal which represents the option the user chooses. Each option can either win, lose or draw dpending on the option the opponent chooses. It is essentially a simple game of chance. The website I have created allows the user to play against a bot until a winning score is reached. To view the full website please click on the following link diplayed below.


[View Rock Paper Scissors Lizard Spock on Github Pages]()


## <u>**Design Goals**</u> ##

The purpose of this game is to provide the user with an enjoyable game of chance. The main features included provide the user with the ability to play a number of turns against the computer until a winning score is achieved. The score is tracked and displayed for the user. The overall design of the page including game layout and colour is intended to provide a simple easy to use game while engaging the users interest on arrival to the page. 


## <u>**Design Features**</u> ##

* **Navigation Bar**

  * Featured on both pages the navigation bars main purpose is to allow the user to navigate between the rules section and the home page where the actual game exists. The navigation bar is handled by a hamburger-menu on all screen sizes and is fully responsive. The main heading is simply the title of the game and located to the left of the header and the hamburger menu is dispalyed on the right.
  
  * The value of the navigation bar and main heading are that they are identical on both pages to allow for easy navigation and create a good user experience.


  ![Navigation bar]() 


  * **Main page**

    * On arrival to the website the user will be instantly viewing the game itself. The home page displays the game itself central to the page. It has the score clearly displayed above what are the two combatant boxes which represent the user and the bot. The five options for the game itself are displayed below these boxes and are represented by the relevant hand signals for each choice. The page is designed to provide the user with an easy to use game that has clear choices and also to display clear results to the choices the user makes while playing the game. 


    ![Main Page]()


   * **Footer** 

     * The footer is a simple design which remains consistent on both pages. Its only content is the copyright for the game.


   ![Footer containing copright for the game]() 


   * **Rules page**

     * The only other page attached to this website containts the rules of the game. The rules are defined here as the result of any choice the user makes. I gave consideration to displayin the rules on the main page and keeping the content to a single page however I came to the decision that this would have a negative impact on user experience on smaller devices such as mobile phones due to scrolling up and down. The design is intented just a simple set of rules that are easy to read and are not distracted by any background images.


     ![Rules of the game]()


    

### **Initial Discussion**

The Rock-Paper-Scissors-Lizard-Spock is a simple easy to play game intended for use by all ages. The website is intended to have a simple layout which only provides the information required to play the game. The intention was to design a layout that is eye catching to the user and is not distraction from the game itself. The user and bot images are simple balcklines with a background image so as to provide a positive response when the box is populated by a user choice which then also selects a bot choice.

<br>

* **Key Information**

  * How to play the game.
  * The rules of the game.
  * How the user wins or loses each turn.
  * How many points to win the game.
  * What happens when the user wins the game.
  * what happens when the bot wins the game. 
  * Does the game reset after the required winning score is reached.

<br>

* **Client Goals**

  * To be able to view the site on a range of devices including a smartphone, a tablet and a laptop.
  * To make the site informative without having too much information to allow users to easily see the essential details.
  * To provide easy navigation throughout the site so users can easily navigate to and from both pages.
  * To allow quick and easy gameplay .
  * To display a winner and loser at the end of each completed game.

<br>

* **First Time Visitor Goals**

  * I want to view the rules of the game before playing.
  * I want to see who wins and loses after each turn so I do not have to keep returning to the rules to understand what is happening during gameplay.
  * I want to have a clear and uplifting display on the screen when I win the game.
  * I want to be comiserated when i lose the game and encouraged to play again to see if I can win.
  * I want the game to quickly reset so I can play again after completion of each game.

<br>

* **Returning Visitor Goals**

  * The game was simple and fun on my first visit to this site and I want to be encouraged to return and play again as many times as I want.

  * I want to try my luck at beating my previous scores.
  
<br>
 
* **Frequent Visitor Goals**

  * I want to return to this site multiple times to continue to try better by previous best score. 


* **Wireframes**

 * **Main Page**

 * **Rules Page**

 ## <u>**Designs**</u>

* **Colour Scheme**

  * The below image was taken from the website colorhexa.com and it is an example of the main colour displayed in this site. The original colour picked was a light green colour with a value of #ccf381. This colour was selected in place of #ccf381 as it is considered a web safe colour as shown in colorhexa.com. 
  The other colours displayed on the site are whitesmoke and black. The whitesmoke colour was chosen for the purpose of emphasising the foreground display. Black was used for all font colours with red used for all hover actions.

  * The website used for the colour scheme is [Color hexa](https://www.colorhexa.com/ccff99). I have attached a screenshot form the website of the particular colour used.
<br>

  ![Webpage used for main colour styling](assets/images/color-styling.png)
<br>

* **Font-family**

  * Roboto was used for the headings on the site. It is a Sans-Serif font. The back up font selected was San-Serif.

  * Lato was used for the body of the site. It is also a Sans-Serif font. The back up font selected was Sans-Serif.

* **Imagery**

  * All imagery was used with the permission of their owners. I have credited all of these in the Credits section of this README.md File.
<br>

## <U>**Accessibility**</U>

* I have been conscientious of achieving the maximum amount of accessibility possible by completing the following actions:

  * Using semantic HTML.

  * Using alt attribute with images on the site or aria-labels in the cases where the images were placed in the CSS file. The method of achieving this is displayed in the credits of this readme.md file.

  * Ensuring sufficent colour contrast throughout the site.

<br>

## <U>**Technologies used and Implemented**</U>

* The following technologies were used and implemented in the construction and design of this website.

  * HTML and CSS - To create this website.

  * Git - For version control.

  * Github - To save and store the files for the website construction.

  * Google Fonts - To import the fonts used on the website.

  * Google dev tools - To troubleshoot and test features and to monitor and adjust the website to ensure it is responsive.

  * Am I Responsive? - To show the website image on a range of devices.

  * NVaccess.org - To test the alt and aria-lable attributes.
<br>

## <U>**Testing and Bugs**</U>

* Testing was an ongoing process from the start to the finish of the build. I used a chrome developer tools to assist me in solving problems as I progressed through the project. I encountered the following build issues and bugs as I progressed through the project.

 * The hamburger menu would not perform as expected. The contained nav bar was intended to display central when clicked but it dispalyed at the top of the opened box. I corrected this by targetting the css through javaScript and had it display as a flex property.

 ## <U>**W3C Validator**</U>

* The W3C validator was used to to validate the html on all pages of this website. No errors were returned when passing through the W3C validator.
 
  * [Main Page HTML]()
  * [Rules Page HTML]()
  
<br>

* The official Jigsaw Validator was used to validate the CSS on the website. No errors were found when passing through the Jigsaw validator.
<br>

![CSS Validator](assets/images/css-validator.png)
<br>

## **Final Testing User Goals** 

* Device testing

  * I performed testing on the following devices - Samsung S21+ , Samsung S10 and Huawei MateBook D15. I also used google chrome developer tools to check the sites responsiveness on the following devices - iPhone SE, iphone XR, iphone 12 pro, Pixel 5, Samsung Galaxy S8, Samsung Galaxy S20 Ultra, ipad Air, Surface Pro 7, Surface Duo, Galaxy Fold, Samsung Galaxy A51/71, Nest Hub, Nest Hub Max. All tests showed the website to perform as expected.

* Browser testing

  * I performed testing on using the following browsers - Google Chrome ,Safari ,Mozilla Firefox. All tests showed the website to perform as expected.

* Header

  * I tested the hamburger menu on each page and it displayed the page options when clicked.

  * I tested the nav bar to ensure that the links worked as expected from the home page. Each link brought me to the required location when selected.

  * I tested the nav bar to ensure that all links worked as expected from the rules page. Each link brought me to the required location when selected.

* Gameplay

 

<br>

## <u>**LightHouse**</u>
## **Final Testing User Goals** 

* I applied the lighthouse tool to this project which is located in the Chrome Developer Tools. There are four areas tested in the lighthouse test.

  * Performance
  * Accessibility
  * Best Practices
  * SEO
<br>

### **Main Page**

The following images in this section are displayed as lighthouse desktop as the first image and lighthouse mobile as the second image.
<br>

1. original score

2. improved score 

![Lighthouse Main desktop score]()

![Lighthouse Main mobile score]()
<br>

### **Rules Page**

The following images in this section are displayed as lighthouse desktop as the first image and lighthouse mobile as the second image.
<br>

1. original score.

2. improved score.

![Lighthouse Rules desktop score]()

![Lighthouse Rules mobile score]()
<br>

## <u>**Deployment and Local Development**</u>

### **Deployment**

The live website was deployed by following the instructions below. Github pages was used to achieve this.

  1. Log in to GitHub.
  2. Find the repository named summer-soccer-camp.
  3. click on the settings link.
  4. Once in settings, navigate to the pages tab on the side menu.
  5. Under source, Select the branch to main, then click save.
  6. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate a successful deployment.
<br>

  ### **Local Development**

To fork the Rock/Paper/Scissors/Lizard/Spock repository:

  1. Log in to GitHub.
  2. Go to the repository for this project, johncci/Rock/Paper/Scissors/Lizard/Spock game.
  3. Click the fork button located near the top right corner of the page.
<br>

To clone the Rock/Paper/Scissors/Lizard/Spock repository:
  1. Log in (or sign up) to GitHub.
  2. Go to the repository for this project, johncci/Rock/Paper/Scissors/Lizard/Spock game.
  3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
  4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
  5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.
<br>

## <u>**Credits**</u>

### **Content**

  * I began this project using float properties but I then learned of an easier way to position items using flex. I learned how to apply [Flex Positioning](https://www.w3schools.com/css/css3_flexbox.asp) at W3C schools.

  * The idea for the code to create the aria-labels for images in the CSS file was provided to me by tutor support who suggested a a website where I could learn how to do this. The website I accessed to write the code for the aria-label is [davidmacd.com](https://www.davidmacd.com/blog/alternate-text-for-css-background-images.html).
<br>

### **Media**

  * The icon/image for the hamburger menu was taken from [icon-libarary.com](https://icon-library.com/).
  * The images on this site were changed from there original settings using [ezgif.com](https://ezgif.com/).
  * The font for this page was set using [googlefonts.com](https://fonts.google.com/). 
  * The alt and aria-label attributes were tested using [NVaccess.org](https://www.nvaccess.org/download/).

  All media listed above was used with the permission of the owner.
<br>

  ### **Acknowledgments**

 






