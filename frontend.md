## React Assignment

1. How can you implement shared functionality across a component tree?
   Ans = Store the state of the application at root level or App level. You can pass data as props to multiple levels of hierarchy (props drilling) but this is not suitable. Instead, use state manangement techiques such as Context or Redux.
   Example, Context allows you to share state across the entire component tree without manually passing props down at every level.
   For this, we create a Context object and Provide a Context value at a high level in your component tree and then Consume the Context value in any component that needs it.

2. Why is the `useState` hook appropriate for handling state in a complex component?

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
