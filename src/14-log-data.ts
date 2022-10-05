//Use console methods to complete the challenges in this script:

// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("Valore:", surprisingFact)
console.log("Valore: %s", surprisingFact)

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log("Il figlio di %s è %s che ha come figlio %s che ha come figlio %s",
  familyTree[0].name, familyTree[0].children[0].name, familyTree[0].children[0].children[0].name,
  familyTree[0].children[0].children[0].children[0].name )

  console.log(JSON.stringify(familyTree, null, 2))

  console.dir(familyTree, {depth: null})

  console.table(familyTree)

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

let count = 0
function importantTask() {
  count+=1
  console.count("Iterazione")
  if (count > 4) {
    console.countReset()
  }
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset()
importantTask();
importantTask();