### Testing React with Jest and Enzyme

Tests should act as documentation. Hence, good unit tests do not test implementation details. Instead, they test behavior. 

### Conventions:
Examples could be found in the `examples/src` folder. They are grouped by test behavior.

#### Patterns
Patterns can be found in the `pattern.test.js` file. (I usually name tests after my component so that it is easy to understand)

#### Anti-patterns
Anti-patterns can be found in `antipattern.test.js` along side the `pattern.test.js`. 

#### Some common scenarios tested in components:
1. [Check if a component exists](examples/src/1_component_exists/pattern.test.js)
    1. [Check if a given component exists](examples/src/1_component_exists/pattern.test.js#:6)
    2. [Check if a component with given text exists](examples/src/1_component_exists/pattern.test.js#L12)
2. [Simulating action on a button](examples/src/2_click/pattern.test.js)
    1. [Check if the value has changed on screen](examples/src/2_click/pattern.test.js#L7)
    2. [Check if the props to child component has changed](examples/src/2_click/pattern.test.js#L15)        

#### Contributors
Send a Pull Request with patterns you have found interesting when testing `React` code with `jest` and `enzyme`. You can also share some antipatterns you have come across. Please explain why you think of it as a pattern/anti-pattern in the commit message. 

If you have any comments on the patterns/anti-patterns listed here, feel free to leave a comment. Let's chat about it :) 