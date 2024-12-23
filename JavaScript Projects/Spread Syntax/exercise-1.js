/*
    1. Create an variable called "views" that points at this array:
       [ [5, 10, 20], [10, 20, 30] ]

    2. Create another variable called "viewsCopy" that creates a
       copy of "views" using the spread operator

    3. Print out "views" and "viewsCopy"

    4. Add the number 40 to the end of the second array inside "viewsCopy"
       and delete the last number (20) inside the first array

    5. Add the array [100, 200] to the end of "viewsCopy"

    6. Print out "views" and "viewsCopy"

    *Explain this behaviour
*/

const views = [ [5, 10, 20], [10, 20, 30] ];
const viewsCopy = [...views];

console.log(views);
console.log(viewsCopy);

viewsCopy[1].push(40);
viewsCopy[0].pop();
viewsCopy.push([100, 200])

console.log(viewsCopy);
console.log(views);
