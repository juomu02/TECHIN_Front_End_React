# React project setup

1. ### Node.js®

   ###### It's a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

   https://nodejs.org/en

   ###### node command lets us run JS code outside of a browser, e.g.

   ```
   node react-basics.js
   ```

   ### npm (Node Package Manager) lets us install external libraries (or packages) into our project

   ```
   npm install create-vite
   ```

2. ### npx command installs and executes a package, e.g.

   ```
   npx create-vite
   ```

3. ### npm install command installs all packages listed in package.json as dependencies

   ```
   npm install
   ```

4. ### npm run dev runs the website

   ```
   npm run dev
   ```

5. ### eslint extension\*

   \*eslint highlights problems in our JavaScript code.

   ```
   npm install --save-dev eslint
   ```

6. ### install Tailwind\*

   https://tailwindcss.com/docs/installation/using-vite

7. ### install Axios

   ###### Axios emulates backend API

   ```
   npm i axios
   ```

8. ### install Hook-form

   ###### Hook-form is a form management library

   https://react-hook-form.com/get-started

9. ### install Hook-form Dev-tools

   ###### Dev-tools adds a browser plugin that lets us debug forms with validation

   https://react-hook-form.com/dev-tools

10. ### install json-server
    ###### \*ending "data/data.json --port 3000 is special for this project setup
    ```
    npx json-server data/data.json --port 3000
    ```

# File and folder review

### Folders

- **data** folder is used for Axios "backend" files
- **node_modules** folder is where npm installs all of the packages
- **public** folder contains files that should be available to the public. Public means that we can access them using a URL, e.g. https://website.com//vite.svg
- **src**(scource) folder contains the code of webside. So all JS and CSS code goes in here.
  - **assets** folder contains images that we want to display on our website.
  - **components** folder contains JSX files that store website component functions.
  - **services** folder contains JS files that store Axios API functions.

### Files

- **.env** stores Axios host URL
- **.gitignore** prevents git from adding listed files.
- **eslint.config.js** eslint highlights problems in our JavaScript code.
- **index.html** loads the webpage HTML.
- **package-lock.json** contains package version numbers of project dependencies.
- **package.json** list packages used for project(dependencies).
- **README.MD** provides information about the project.
- **vite.config.js** configures Vite, which is the tool used to setup the project.
  - It helps "build" the website by taking all JS and CSS and loading them into HTML file.
  - Vite also creates a server. (A server puts our website at a URL, e.g. localhost)
