I have not completed the css entirely, mainly the select element is what that remains, but its complete enough for back-end development, I hope.

// Variables are exposed to the window by having the chartJSINtegration file loaded to the page
// Thinking of keeping things simple and just update/destroy+render the chart when needed (not multiple charts)
// helper functions can be done on this file or another one is up to you

// How to update the chart
// https://www.chartjs.org/docs/latest/developers/updates.html

// Fix on how to change the chart type
// https://stackoverflow.com/questions/36949343/chart-js-dynamic-changing-of-chart-type-line-to-bar-as-example

+ script.js
```js
let globalChart; // Chart Global Object
const ctx = document.getElementById('chart'); // Canvas Global Element
```

