## Description



Project Name: Dev Stack



Description: This project is basically counts Web development technology from the user and put them in a stack. When the "Add To Stack" button is clicked it's functionality will be to add the technology into the selected technology stack. I used Vite Project to build project and used React along with TypeScript and JSX and for styling the UI I used TailwindCSS. 



Used Technology : 

* React.js
* TailwindCSS
* DaisyUI
* TypeScript(ES6)
* React Toastify (npm Package)
* JSON 
* Vite



Features:

1. Showing the Technology Card along with a button which will be added to technology stack by clicking.
2. There is Stack which is hold the selected technology. Is also comes with deleting feature. It allows you to delete a selected technology by clicking the cross icon and can delete all the technology by clicking the remove all button.
3. Responsive UI - This technology is build with responsive UI by using TailwindCSS. It will change it's UI in different size of screen. 







## Questions answer 



Q1. What is JSX, and why is it used in React?

Ans->JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside your JavaScript files.

Q2.What is the difference between props and state?

Ans->

Q3.What does the useState hook do, and where did you use it in this project?

Ans->In React, props are data passed down from a parent component, while state is internal data managed dynamically within the component itself.

Q4.What does the useEffect hook do, and why did you need it to load the JSON data?

Ans->The useEffect hook is a built-in React tool that allows us to synchronize our component with external systems and perform side effects in functional components. Side effects are operations that happen outside the standard scope of calculating and returning JSX, such as fetching data, manually changing the DOM, or setting up subscriptions and timers.

Q5.Why does every item in a .map() list need a unique key prop?

Ans->In React, every item in a .map() list needs a unique key prop so that React can track the identity of individual components across renders. This allows React to know exactly which items have been added, removed, or reordered.

Q6.What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans->Conditional rendering is a programming pattern in React that controls which user interface elements appear on a screen based on specific rules, states, or data values. I use Conditional rendering in several place in my project. The specific one place is in the stack card component, the selected technology message Show "No Technology selected" if the stack is empty and show "(technology count) Technology Selected" when the stack contains 1 or more items. I handled the technology count dynamically.

Q7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans->I pass data from a parent component to a child component using properties or parameters(Props) and the child sends data back by calling a function provided by the parent

