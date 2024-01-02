# High Order Array Methods:

1. **map(callbackFn(element, index, array))**:

   - `callbackFn`: Function that produces an element of the new array, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `map` was called upon.

   Returns a new array.<br/><br/>

2. **filter(callbackFn(element, index, array))**:

   - `callbackFn`: Function that tests each element of the array, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `filter` was called upon.

   Returns a new array.<br/><br/>

3. **reduce(callbackFn(accumulator, currentValue, index, array), initialValue)**:

   - `callbackFn`: Function that is executed on each element of the array, taking four arguments:
     - `accumulator`: The accumulator accumulates the callback's return values.
     - `currentValue`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `reduce` was called upon.
   - `initialValue`: Optional. Value to use as the first argument to the first call of the `callbackFn`.

   Returns a single value (not necessarily an array).<br/><br/>

4. **forEach(callbackFn(element, index, array))**:

   - `callbackFn`: Function to execute for each element, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `forEach` was called upon.

   Does not return a new array (returns undefined).<br/><br/>

5. **some(callbackFn(element, index, array))**:

   - `callbackFn`: Function to test for each element, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `some` was called upon.

   Returns a Boolean value.<br/><br/>

6. **every(callbackFn(element, index, array))**:

   - `callbackFn`: Function to test for each element, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `every` was called upon.

   Returns a Boolean value.<br/><br/>

7. **find(callbackFn(element, index, array))**:

   - `callbackFn`: Function to execute on each value in the array, taking three arguments:
     - `element`: The current element being processed in the array.
     - `index`: The index of the current element being processed.
     - `array`: The array `find` was called upon.

   Returns the first element that satisfies the provided condition.<br/><br/>

These callback functions provide flexibility in defining the specific logic or conditions to be applied to the elements of the array. The information on whether they return a new array or not is also included.
