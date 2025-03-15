Hello Guys, I am learning react.

 commands used : 
 1. npm init (To init new/existing package by creating package.json file which might stores approximate versions of packages installed) 
 - tilde -> major version updates possible
 - caret -> minor version updates possible (perferred to use)
 2. npm install -D parcel  (To install the parcel package) (package-lock.json file created which stores exact package version which is used)
 3. npm install (to fetch node modules from the versions used in package.json and package-lock.json files)
 4. npx parcel index.html (creates a local server)
 5. npm install react (install react)
 6. npm install react-dom (install react-dom)
 7. import React, ReactDOM from node-modules (Remove react scripts from index.html as why to make extra network call when we can import it from node_modules)
 8. npx parcel build index.html (remove ["main": "App.js"] from package.json) (to generate build)
 - the dev/prod build files are stored in dist folder
9. Make use of scripts to run the commands (npm run start/npm start, npm run build)

#Dev Dependency vs normal dependency ? 
 - Dev Dependency is used only in development phase while other dependencies are used even in the production like parcel is dev dependency.

#What Parcel does ? 
- Creates Dev Build
- Setup Local Server
- Hot Module Replacement(HMR) - Uses file watching algorithm which is written in C++
- Caches : Cache the things to generate faster development builds
- Image Optimizations : 
- File minification : for production builds
- Bundling 
- Compress files
- Consistent Hashing 
- Code Splitting 
- Differential Bundling - support the app on older browsers
- Diagnostic
- Better Error Handling
- HTTPs
- Tree Shaking - remove unused code 
- Different dev and production builds

JSX is not a valid javascript object as it can't be understood by javascript engines/browsers. The JS engines or browsers understand only ecmascript(es6, other versions of es). The jSX is transpiled to React Elements using Babel. 

Role of Babel ? 
1. Transpilation of JSX code to React Elements 
2. transpilation of es6 code to the required version that can be understood by older browsers.

Components : 
- Class based components - older way of creating components (legacy code is written using class based components)
- functional components  - newer way of creating components (widely used) => it is simply a function that returns a piece of JSX(react elements)

Rules for creating components : 
- name of component must starts with a capital letter, 
- to render component pass the component to render function like "render(<HeadingComponent/>)"

Component Composition : 
- When a component is used inside other component it is called component composition