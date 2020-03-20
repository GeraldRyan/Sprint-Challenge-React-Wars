# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

# ReactJs is a javascript library that includes a lot of functionality for being able to display user interfaces. It helps streamline tasks, and also includes stateful features, so you can store state using a couple functions.  

1. What does it mean to think in react?

1. Describe state.

# State is a way of storing user or program data within the program itself 

1. Describe props.

# Props are properties passed from the parent app function to the function that it is calling to render. It is a way of passing information between modules so they can talk to each other and see what each other knows, at least in one direction- top down. Data flows top down from the calling function to the called function, and then the rendering happens from bottom up as it has to as it is recursive- although data need not come from the highest level. It can start at middle levels but just can't be sent up except through JSX rendering.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

# 