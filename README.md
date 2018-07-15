### Testing React with Jest and Enzyme

Tests should act as documentation.
Hence, good unit tests do not test implementation. They test behavior. 

#### Anti-patterns
I have documented anti-patterns in `antipattern.test.js` along side the `App.test.js`. 
Please share more examples with a commit message describing why they are antipatterns.

#### Some common scenarios tested in components:
1. [Check if a component exists](examples/src/1_component_exists/App.test.js)
    1. [Check if a given component exists](examples/src/1_component_exists/App.test.js#:6)
    2. [Check if a component with given text exists](examples/src/1_component_exists/App.test.js#L12)
2. [On clicking a button](examples/src/2_click/App.test.js)
    1. [Check if the value has changed on screen](examples/src/2_click/App.test.js)
