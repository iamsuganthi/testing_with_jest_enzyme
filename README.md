### Testing React with Jest and Enzyme

Tests should act as documentation.
Hence, good unit tests do not test implementation. They test behavior. 

#### Some common scenarios tested in components:
1. [Check if a component exists](examples/src/1_component_exists/App.test.js)
    1.1. [Check if a given component exists](examples/src/1_component_exists/App.test.js#:6)
    1.2. [Check if a component with given text exists](examples/src/1_component_exists/App.test.js#L12)

2. [Check if clicking the button changes value on screen](examples/src/2_click/.test.js)