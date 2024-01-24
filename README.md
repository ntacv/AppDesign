# AppDesign
Application design course projects A4S8

this react native application is a copy of a figma prototype. 

```
git clone the project 
cd AppDesign
npm install
npm start or npx expo start 
w (to start the web server)
```


- Choice of design
For this project, I chose the first figma design. It is a representation of a profile application with two main screens: one introduction to the app and one profile page with information about the user. 
It has a main blue theme, large buttons and a list of information cards. The structure is pretty simple as there is no scrolling needed and only two parts of the app has a special background. 

- What technology
The developping is done in react native with javascript files and javascript styling. To add icons and useful methods, imports of packages are done with npm. The app uses a react native framework called expo, it helps us build and ship the app easily. 
The render was mainly cheked on web preview because of android run errors. 

- How it has been done
complexe parts

navigation
To change pages by clicking on buttons, a navigation stack has been added. It is a react native navigation package that allows to create a stack of pages and navigate through them.
The container component 
info cards 
card group

- bonus part
settings and theme

As a bonus, a settings page has been added. it uses the profile page template and adds dark theme buttons. thoses buttons trigger a react context change of state 