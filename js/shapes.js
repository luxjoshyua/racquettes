function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// here we grab all our the .circles from the html
const circles = document.querySelectorAll('.circle')

// circles returns us an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with its index
circles.forEach((circle, index) => {
  // in here we get access to each one as 'circle'
  circle.animate([{transform: 'scale(1)'}, {transform: 'scale(1.2)'}, {transform: 'scale(1)'}], {
    // here we use the index to create a staggered animation delay
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})





const square = document.querySelectorAll('.square')

square.forEach((square, index) => {
  // gets a random number between 0 and 45 using our random function
  // from stackoverflow
  const randomNumber = random(0, 45)
  // create a bit of randomness for our animation delay
  console.log(randomNumber)
  square.animate(
    
    [
      {transform: 'rotate(0deg)'},
      // here we join or random number into our rotate property
      // { transform: 'rotate(' + randomNumber + 'deg)' },
      {transform: `rotate(${randomNumber}deg)`},
      {transform: 'rotate(0deg)'}
    ],

    {
      // here we use the index to create a staggered animation delay
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity
    }
  )
})







const triangle = document.querySelectorAll('.triangle')

triangle.forEach((triangle, index) => {
  // gets a random number between 0 and 45 using our random function
  // from stackoverflow
  const randomNumber = random(0, 45)
  // create a bit of randomness for our animation delay
  console.log(randomNumber)
  triangle.animate(
    
    [
      {transform: 'rotate(0deg)'},
      // here we join or random number into our rotate property
      // { transform: 'rotate(' + randomNumber + 'deg)' },
      {transform: `rotate(${randomNumber}deg)`},
      {transform: 'rotate(0deg)'}
    ],

    {
      // here we use the index to create a staggered animation delay
      delay: 400 * index,
      duration: 7000,
      iterations: Infinity
    }
  )
})