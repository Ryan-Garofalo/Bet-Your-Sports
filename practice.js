var money=2000
var wager= 50

total=money+wager


var newObj= {
  movie: "Madagascar",
  poster:"yolo",
  rating:9,
}

for (var key in newObj) {
  if (key != "pizza") {
    console.log("hi");

  }else{

    console.log(key);
  }
}

console.log(newObj.hasOwnProperty("pizza"))
