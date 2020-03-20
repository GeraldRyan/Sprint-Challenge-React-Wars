# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

# ReactJs is a javascript library that includes great functionality for being able to render and display user interfaces in html/css. It helps streamline tasks, and also includes stateful features, so you can store state using a couple functions. It is for developing single page applications and is used by some of the largest sites such as facebook, who developed and mainains it. It is only concerned with rendering data to the DOM but is powerful and versatile at doing so and can maintain state (below).  

1. What does it mean to think in react?

# Thinking in react means you think in terms of components, which should be pure functions that transform data/json objects or API requests, etc into a nice looking UI. The components should not transform data outside of themselves.  

# Also, components should be as generic as possible to support reusability, so divide your components into smaller and smaller sub components to achieve that versatility. Some components can pull data from state without directly creating html but rather calling other component functions that do. Therefore, these can be the ones that are site-specific and the 'dumb components' can be reused as needed. Also a component should only change when there is a change to be rendered. Each programming language and use case is special, but often you see the same familiar principles over and over again and I see that here, only with a different implementation. 

1. Describe state.

# State is a way of storing user or program data within the program itself in a state variable. Basically each time the main function is run, the state resets to its initial value you set it to be, but sub functions within the main can change that state as you instruct, or as events such as user inputs, that you establish and link to the state setter, occur. State implemented in the react library through a useState function and they implement this through closures, but that is getting under the hood.


1. Describe props.

# Props are properties passed from a parent function in react to a called function (i.e. a component). It is a way of passing information between modules so they can talk to each other and see what each other knows, at least in one direction- top down. Data flows top down from the calling function to the called function, and the rendering happens from bottom up recursively- although data need not come from the highest level. It can start at middle level at smart components but it can't go up. The result of the data- i.e. the html rendering- goes up.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

# A side effect is anything that effest of something outside of the function being called- for example changing variables outside of the function scope. By definition, side effects never occur in pure functions, which take in args and return data but not change anything outside the function itself. Pushing to an array is an example, or changing state with a closure such as React.useState (which is closure based in its implementation). 