### Testing React with Jest and Enzyme ⚛️🃏
[![CI](https://app.buddy.works/enthudrives/testing-with-jest-enzyme/pipelines/pipeline/144354/badge.svg?token=7b6da1d472d6e77aaa941f8a4e986641684a55b81c653692c3423175ed7a3d68 "CI")](https://app.buddy.works/enthudrives/testing-with-jest-enzyme/pipelines/pipeline/144354)

Unit tests are written to verify the functionality of "units" (small pieces) of code. Hence, good unit tests do not test implementation details. Instead, they should test the behavior of the code being tested.

This is a list of patterns and anti-patterns widely used when testing react applications. 

#### Patterns:
1. [Check if a component exists](examples/src/1_component_exists/pattern.test.js)
    1. [Check if a given component exists](examples/src/1_component_exists/pattern.test.js#:6)
    2. [Check if a component with given text exists](examples/src/1_component_exists/pattern.test.js#L12)
2. [Simulating action on a button](examples/src/2_click/pattern.test.js)
    1. [Check if the value has changed on screen](examples/src/2_click/pattern.test.js#L7)
    2. [Check if the props to child component has changed](examples/src/2_click/pattern.test.js#L15)
3. [Testing change in props](examples/src/3_prop_change/pattern.test.js)
    1. [Check if the DOM has been updated based on new prop](examples/src/3_prop_change/pattern.test.js#L6)
4. [Testing if callback is called](examples/src/4_callback/pattern.test.js)
    1. [Check if the callback is called when an action is performed](examples/src/4_callback/pattern.test.js#L6)
4. [Testing if a dependency was called](examples/src/5_dependencies/pattern.test.js)
    1. [Check if a function was called on a library/module (Using spy)](examples/src/5_dependencies/pattern.test.js#L6)

#### Anti-patterns:
1. [Verifying state](examples/src/2_click/antipattern.test.js#L7)
2. [Modifying state from test](examples/src/2_click/antipattern.test.js#16)
3. [Modifying props from test](examples/src/3_prop_change/antipattern.test.js)

### Conventions in this repository:
Examples could be found in the `examples/src` folder. They are grouped by test behavior.

#### Patterns
Patterns can be found in the `pattern.test.js` file. (I usually name tests after my component so that it is easy to understand)

#### Anti-patterns
Anti-patterns can be found in `antipattern.test.js` along side the `pattern.test.js`. 

### Contributors
Send a Pull Request with patterns you have found interesting when testing `React` code with `jest` and `enzyme`. You can also share some antipatterns you have come across. Please explain why you think of it as a pattern/anti-pattern in the commit message. 

If you have any feature requests, please create an *issue* in this repository.

If you have any comments on the patterns/anti-patterns listed here, let's discuss in comments 😊
