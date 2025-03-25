# React

React is an open-source JavaScript library used to build dynamic web pages, web applications, or user interfaces. It primarily focuses on the view layer and is limited to the front end. React is commonly used to build Single Page Applications (SPAs).

**Current React Version:** 19.0.0

**Created by:** Facebook in 2011 by Jordan Walke for the newsfeed and ads system. Currently maintained by Meta.

**React Native:** Used for mobile applications or native applications.

## Installation and Setup

### Vite
To install Vite, use the following commands:

1. Install Vite:
   ```bash
   npm install vite@latest
   npm create vite@latest
   ```

2. If using the same folder:
   ```bash
   npm install
   code .
   ```

3. If using a new folder:
   ```bash
   cd foldername
   npm install
   code .
   ```

### Run Server
To run the server, use:
```bash
npm run dev
```

After installing React, you will see the following folder structure:

- **node_modules:** Contains all installed third-party packages.
- **public:** Contains static files.
- **src:** Contains source files visible in the UI, including `main.jsx` and `index.css`.

**index.html:** The root file containing a `<div>` with `id="root"` and a script pointing to `main.jsx` (the entry point).

**App.jsx:** Displays some code, while `App.css` is used for styling. `App.jsx` will be exported to `main.jsx`.

**.env:** Configuration file for environment variables.

**.gitignore:** Specifies files and folders to ignore in version control.

## Key Features of React
1. **Component-Based Architecture:** React follows a component-based architecture (CBA).
2. **Virtual DOM:** A copy of the real DOM, which improves performance.
3. **JSX:** React's file extension that allows combining JavaScript and XML in a single file.
4. **One-Way Data Binding:** Data flows in one direction.

### Components
**What are Components?**
Components are reusable UI elements that can be used to build complex user interfaces. They are the building blocks of your application, allowing you to split your code into multiple components. Always write your component names with the first letter capitalized.

**Types of Components:**
1. **Functional Components:** Defined using JavaScript functions (arrow or regular).
   ```javascript
   const ComponentName = () => {}
   function ComponentName() {}
   ```

2. **Class-Based Components:** Defined using JavaScript classes, including `class`, `constructor`, `this`, `super`, inheritance, and `extends`.

## Conclusion
Understanding these concepts is crucial for effective React development. By mastering React's features and component structure, you can build efficient and dynamic web applications.



