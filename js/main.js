// wave hero animation here

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


// table-tennis animation here

var CSStransforms = anime({
  targets: '#table-tennis .el',
  translateX: 250,
  scale: 2,
  rotate: '1turn',
  loop: true,
  duration: 3000, 
});


// table-tennis animation here

var CSStransforms = anime({
  targets: '#badminton .el-bd',
  translateX: 250,
  // translateY: 400, 
  scale: 2,
  rotate: '2turn',
  loop: true,
  duration: 5500, 
});


// squash animation here

var CSStransforms = anime({
  targets: '#squash .el-sq',
  translateX: 250,
  // translateY: 400, 
  scale: 2,
  rotate: '2turn',
  loop: true,
  duration: 7600, 
});


// tennis animation here

var CSStransforms = anime({
  targets: '#tennis .el-tn',
  translateX: 250,
  // translateY: 400, 
  scale: 2,
  rotate: '2turn',
  loop: true,
  duration: 4000, 
  // easing: 'linear'
});


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


// table-tennis animation here

// var CSStransforms = anime({
//   targets: '#eyes .el-eyes',
//   translateX: 250,
//   // translateY: 400, 
//   scale: 2,
//   rotate: '2turn',
//   loop: true,
//   duration: 7500, 
// });


// eyes animation here

var unitlessValue = anime({
  targets: '#eyes .el-eyes',
  translateX: 250,
  rotate: 540,
  loop: true,
  duration: 7500
});


// hand animation here

var unitlessValue = anime({
  targets: '#hand .el-hand',
  translateX: 250,
  // rotate: 540,
  rotate: 360, 
  loop: true,
  duration: 7500
});