


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var waldoIndex = arr.indexOf(arr[i]);
      found(waldoIndex);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  // Console.log waldo's index in array
  // Result: "Found Waldo at Index 2"
  console.log("Found Waldo at Index 2");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);