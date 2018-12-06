// ==== marquee effect goes here ====

function makeMarquee(list) {
  // this is now taking a list of things (see below)
  // pick the marquees in the code
  // slightly diff than before due to querySelectorAll as 
  // this is a list of ALL marquees, not just the first one
  const marquees = document.querySelectorAll('.marquee span')
  
  // for each thing in the array below, loop over it
  list.forEach((title, index) => {
    // fill up with the individual text (e.g. FIFTY, then Rik, then SuperHi)
    const marqueeText = new Array(50).fill(title).join(' — ')
    
    // pick the 1st, then 2nd, ... version of the marquees from above
    const marquee = marquees[index]
    
    // add the text!
    marquee.innerHTML = marqueeText
  })
}
// here we actually run our makeMarquee function, but now passing it
// an array of things to fill up each marquee
makeMarquee([
  'NEW Tournament Coming Soon!',
])