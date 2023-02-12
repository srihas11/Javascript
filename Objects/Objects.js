var lizzieTheCat = {  // An object is a data type that lets us store a collection of properties in a single variable.
    age: 18,
    furColor: "grey",
    likes: ["catnip", "milk"],
    birthday: {"month": 7, "day": 17, "year": 1994}
  };

  var aboutWinston = {
    hometown: "Mountain View, CA",
    hair: "no"
  };
  
  console.log("Winston is from " + aboutWinston.hometown)
  console.log("Winston has " + aboutWinston.hair + " hair")

  var myCats = [  //Arrays of objects, useful ways of storing data in programs.
    {name: "Lizzie", 
     age: 18},
    {name: "Daemon",
     age: 1}
  ];
  
  for (var i = 0; i < myCats.length; i++) {
    var myCat = myCats[i];
    console.log(myCat.name + ' is ' + myCat.age + ' years old.');
  }

  var positions = [  // Example of an array of coordinate positions:
    {x: 200, y: 100},
    {x: 200, y: 200},
    {x: 200, y: 300}
];

for (var i = 0; i < positions.length; i++) {
    var position = positions[i];

}
