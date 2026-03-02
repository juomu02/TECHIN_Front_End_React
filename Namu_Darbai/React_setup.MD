# React project setup

## 1. Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
(https://nodejs.org/en)

## 2. node command lets us run JS code outside of a browser, e.g.
```
node react-basics.js
```

## 3. npm (Node Package Manager) lets us install external libraries (or packages) into our project
```
npm install create-vite
```

## 4. npx command installs and executes a package, e.g.
```
npx create-vite
```

## 5. npm install command installs all packages listed in package.json as dependencies
```
npm install
```

## 6. npm run dev runs the website
```
npm run
```

## 7. eslint extension*
 *eslint highlights problems in our JavaScript code.

## 8* install Tailwind
(https://tailwindcss.com/docs/installation/using-vite)



# File and folder review

# Folders
* **node_modules** folder is where npm installs all of the packages
* **public** folder contains files that should be available to the public. Public means that we can access them using a URL, e.g. https://website.com//vite.svg
* **src**(scource) folder contains the code of webside. So all JS and CSS code goes in here.
    * **assets** folder contains images that we want to display on our website.

# Files
* **.gitignore** prevents git from adding listed files.
* **eslint.config.js** eslint highlights problems in our JavaScript code.
* **index.html** loads the webpage HTML.
* **package-lock.json** contains package version numbers of project dependencies.
* **package.json** list packages used for project(dependencies).
* **README.MD** provides information about the project.
* **vite.config.js** configures Vite, which is the tool used to setup the project. 
    * It helps "build" the website by taking all JS and CSS and loading them into HTML file.
    * Vite also creates a server. (A server puts our website at a URL, e.g. localhost)