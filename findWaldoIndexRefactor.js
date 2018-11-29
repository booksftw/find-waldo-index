


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach( (el,i) => {
    if (el === 'Waldo') {found(i)}
  })

}

function actionWhenFound(index) {
  // Console.log waldo's index in array
  // Result: "Found Waldo at Index 2"
  console.log("Found Waldo at Index 2");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);