### TESTING

Unit test:
    focus on atomic test (from small features, classes, functions)

Integration:
    focus on how several pieces work together


The test should be:
1. Easy to write
2. Easy to read
3. Reliable
4. Faster
5. Mainly Unit Test


3 A
A: Arrange
    - Prepare the test stage and initial state
A: Act
    - Apply actions or stimuli
A: Assert
    - Observe the result of the behavior


#### Set up JEST
DOC: https://jestjs.io/
https://gist.github.com/Klerith/98d7b1bc0f1525e892f260813cad1007

* install ``npm i -D jest @types/jest ts-jest supertest``, supertest allows us to test API REST
* Create Jest config file ``npx jest --init``