# Advanced CSS Project: Animate *Favorite Colour* by Joni Mitchell

## Background

This project came together as a part of our *advanced CSS* course at NTNU in Gjøvik. The goal was to choose an interesting text, poem, song or anything else and use CSS technologies to create fitting animations for the chosen piece. Our choice fell on Joni Mitchell's classic *Favorite Colour* as we thought that this would be a perfect fit because the text seemed really fun to work with and invited us to be creative with our animations. 

## Progress

As a starting point, we agreed upon how we wanted to animate the song and exactly **what** the animations should consist of. We then **storyboarded** how we wanted the different animations to coincide with the *lyrics* of the song. As the lyrics are quite *vivid* and *literal*, we decided to focus on specific **words** throughout the song. Tree, apples, leaves and man are all meaningful words that we focused our animations on and around. 

## Visualization

Our main motive in our design is a **tree** which will be present throughout the entire design. The screen will be *divided* into two sections with lyrics on one side and a big tree on the other. As the viewer *scrolls* through the text, the tree will change its appearance accordingly. We thought this would make for a good visual effect which harmonizes well with the lyrics. Each verse will be divided into **two** parts and the viewer has to scroll down the page to get to the next part. It will take a total of *ten scrolls* to get through the whole song. The animations will go slowly with a lot of *fading* and *smooth* transitions so as to keep in touch with the calm and harmonious theme in Mitchell’s lyrics

## Project structure
**BEM**

BEM stands for **B**lock **E**lement **M**odifier, and is a methodology that helps with reusing and sharing your code.
Basically, BEM is a simple and powerful *naming convention* that is very useful for front-end coding.

The **block** represents a standalone entity that is meaningful on its own. The element is a part of the block that does nothing by itself, but is tied to the block.
The modifier is a flag on a block or element. It used to change their appearance or behavior.

So an example of a **block** could be *header*, while an **element** could be *header title*, and a **modifier** could be *hidden*.
A hidden modifier of the element header title would be named as: `.header__title--hidden`. 

With the use of BEM, working together on our project will become a much smoother experience, as it will be easier to understand what each name stands for.

**Sass**

Sass stands for **S**yntactically **A**wesome **S**tyle**s**heet and is a pre-processor for CSS. When working on big projects, the CSS code can become heavy and unmanageable pretty quickly. Sass helps us to keep our styles *short and concise* by implementing various features that don't exist in traditional CSS. 

Instead of repeating the same code over and over again, we can use Sass to create *variables* and assign those variables to specific elements that we wish to style. This way,
if we have to change something, we only need to modify the variable.

Another powerful and very useful feature in Sass is `@extend`. This feature lets us share a set of CSS properties from one selector to another. If many elements share the same styles, we can group them together in an `@extend` and assign it to the elements. This helps us to keep our code *DRY*, neat and clean.

Because web browsers don't understand Sass-code, we need to *convert* it to a normal CSS-file which can be used on our website. This process is called *transpiling* and is done by creating a **Sass- (input)** and a **CSS-file (output)** and let your terminal "watch" your Sass as you code, and automatically convert it into standard CSS.

**File structure**

To avoid making our files too long, we think it's best to split them up in specific **categories**, for example by having one scss/css-file for the web page itself and another one for the different animations (and so on). This way we don't have to look through hundreds of lines of code in one single file and can instead **group** necessary styles/structures/scripts together in smaller amounts. 

Our main tools will be **HTML, CSS/SCSS and JavaScript**. We will create directories for each of these and store the code in its respective folder so as to have a good overview over the differents parts in our project.

We will use *short and descriptive* names to quickly distinguish between the different files so that we can find and work on the ones necessary. The same goes for anything else that needs a name. Our naming practice will be consistent and we will not mix different naming styles.

## Creative use of CSS

Our project mainly involves *animations* targeted to one element: A tree which will change its appearance according to the lyrics shown on the screen. This tree will be created as an `SVG` and animated through the use of **CSS keyframes**. We shall use our storyboard as a guide and aim to code animations which will have the desired effect on the SVG-element. This may include everything and anything involving CSS animations. In essence, our SVG-tree will *transition* from one state to another, either by changing *structure*, *color* or other *attributes*. 

By using **CSS Grid/Flexbox** we will split the viewport into two parts where the song lyrics will appear on the **left** and our main target for animations - the tree - will appear on the **right** to ensure that both elements (text and image) are clearly in view and don't collide with each other.

Our animations will be triggered by page scrolling which we want to achieve by using JavaScript. 

## Media queries

Our main design will be developed for *standard desktop screens*, but keeping in mind the **dynamics, accessibility and responsiveness** of our project, we plan to create different `media queries` so that our webpage can be accessed from screens of different sizes. By customizing our page to tablets and smartphones, our project can be viewed from almost anywhere. Again, we will use our specific storyboards as guides and change the page content to fit the screen necessary. We will use JavaScript to achieve a "scrolling action" specifically for touch screens, which in this case will be a *swiping* action.
