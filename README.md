# Unit-05-Third-Party-APIs-Homework-Day-Planner
Day Planner Activity

Deployed application URL: https://silamble.github.io/Unit-05-Third-Party-APIs-Homework-Day-Planner/
GIT Hub Repo URL: https://github.com/SILamble/Unit-05-Third-Party-APIs-Homework-Day-Planner

As a web development student activity I have created a simple day planner with the following functionality:

*Displays current day & time
*For each hour of a work day a task can be input to the page and saved, the task is visible upon refreshing the page.
*The hours of each day are dynaically colour coordinated to display if they are in the past/present/future
*The tasks can be cleared using a simple clear button, to ready the page for the following day. This can also be accomplished by deleting
the text in each task and saving.

To create this application I used:
    HTML Index Page
    CSS Styling
    Moment JS
    Javascript script

*On the HTML page is the general layout of the page, using bootstrap elements. With appropriate ID's and classes for styling and scripts.
*On the CSS Styling file I created general static styling, and styles to be applied dynamically using javascript
*The Moment JS API was downloaded from https://momentjs.com/, to parse browser times into a more manageable format.
*The Javascript file uses the functionality of Moment JS to compare the browsers time against a defined time in my HTML planner (via id's)
and apply dynamic styles via "else if" statements
*The Javascript file also stores the user inputs to client side local storage via On Click event listeners and also clears the local storage on a second On Click Event Listener