// scroll links go here
// 1. whenever we click a .js-scroll link, we want to run a function
// 2. we want to stop the link from jumping straight to our section (its default behaviour)
// 3. we want to find out the href attribute, and then grab that element
// 4. then scroll to it using scrollIntoView

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
	
	// addEventListener is just the same as jQuery’s .on()
  // we can listen for events on elements and then run a function
  link.addEventListener('click', (event) => {
		// using the event keyword we get access to a snapshot of what
		// happened when we clicked on our link

		// this is equivalent to return false in jQuery
		// it will block the default browser behaviour of the link jumping to
		// the href attribute     
    event.preventDefault()
		
		// here we grab the href attribute from our link
    const href = link.getAttribute('href')
    console.log(href)
		// here we use the new  scrollIntoView feature to scroll to 
		// our desired element in a smooth fashion    
    document.querySelector(href).scrollIntoView({ 
      behavior: 'smooth' 
    })

  })
  
})




// var infiniteLoopAlternate = anime({
//   targets: '#wave',
//   translateX: 250,
//   direction: 'alternate',
//   loop: true
// });




// var colors = anime({
//   targets: '#wave',
//   translateX: 250,
//   backgroundColor: [
//     {value: '#FFF'}, // Or #FFFFFF
//     {value: 'rgb(255, 0, 0)'},
//     {value: 'hsl(100, 60%, 60%)'}
//   ],
//   easing: 'linear',
//   direction: 'alternate',
//   duration: 2000,
//   loop: true 
// });




var colors = anime({
  targets: '#wave',
  translateX: 250,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: '#FFB5AF'},
    {value: '#86D7C8'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000,
  loop: true 
});




// var relativeValues = anime({
//   targets: '#wave',
//   translateX: {
//     value: '+=150',
//     duration: 1000,
//     loop: true
//   },
//   width: {
//     value: '-=10',
//     duration: 1800,
//     easing: 'easeInOutSine',
//     loop: true 
//   },
//   height: {
//     value: '*=4',
//     duration: 1800,
//     easing: 'easeInOutSine',
//     loop: true
//   },
//   direction: 'alternate'
// });




// progress bars go here

$(document).on("scroll", function () {
  // total bar dist
  var barTotal = ($(window).height() * 2) + ($(window).width() * 2)

  // scroll total
  var scrollTotal = $(document).height() - $(window).height()

  // current scroll position
  var pixels = $(document).scrollTop()

  // percantage scrolled
  var pc = pixels / scrollTotal

  // bar across percentage of total
  var barAcross = $(window).width() / barTotal

  // bar down percentage of total
  var barDown = $(window).height() / barTotal

  var bar1 = pc / barAcross
  var bar2 = (pc - barAcross) / barDown
  var bar3 = (pc - barAcross - barDown) / barAcross
  var bar4 = (pc - barAcross - barDown - barAcross) / barDown

  $("div.bar-1").css("width",  100 * bar1 + "%")
  $("div.bar-2").css("height", 100 * bar2 + "%")
  $("div.bar-3").css("width",  100 * bar3 + "%")
  $("div.bar-4").css("height", 100 * bar4 + "%")

  console.log(bar1)
})



