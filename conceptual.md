### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - It gives us client-side routing. Which allows us to load new pages without loading from the server.

- What is a single page application?
  - sites that exclusively use client-side routing

- What are some differences between client side and server side routing?
  - Server side routing - Page reload with ever URL change, More traditional architecture
  - Client side routing - Potential for improved UI/UX, More modern architecture

- What are two ways of handling redirects with React Router? When would you use each?
  - Using the <Redirect> component - useful for "you should'nt have gotten here, go here instead"
  - Calling .push method on the history object - useful for "you finished this, now go here"

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Import Redirect
  - or do not use exact pathing

- How do you grab URL parameters from within a component using React Router?
  - useParams hook

- What is context in React? When would you use it?
  - When a nested component can access variables without having to declare through every single nested component

- Describe some differences between class-based components and function
  components in React.
  - functional components - plain JS function that accepts props as an argument and returns a react ele(JSX), stateless, hooks are easily used to make them stateful
  - class components - must have the render() method return JSX, stateful, requires diff syntax to implement hooks.

- What are some of the problems that hooks were designed to solve?
  - less code
  - allowed function compoennts to contain state and make use of life cycle methods without writing class
