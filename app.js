console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number){
    return (plusNumber) => {
        return number + plusNumber
    }
}
let plus15 = plus(15)
console.log(plus15(10))

// Exercise 2 Section: forEach
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(listNames)

  function listNames(item) {
    console.log(item.name)
  }

  // Exercise 3 Section: map
  const mapping = users.map((user)=>{
    return {
      name: user.name,
      score: user.score
    }
  })

  console.log(mapping)

  // Exercise 4 Section: filter
  const filtering = users.filter((user)=>{
    if(user.isActive === true) {
      return user
    }
  })
console.log(filtering)

// Exercise 5 Section: sort
console.log(users.sort((a, b)=> {
  if(a.score < b.score){
    return 1
  } else {
    return -1
  }
}))


// Exercise 6 Section: reduce
let avgScore = users.reduce((sum, user)=> sum + user.score, 0) /users.length

console.log(avgScore)