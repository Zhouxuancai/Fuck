// General Global Variables
var $html = document.getElementsByTagName('html')[0],
    $body = document.getElementsByTagName('body')[0];


// Scrolling listener for stuff like the navbar hide action and parallax effect (if have)
var $navbar = document.getElementsByClassName('navbar')[0],
    latestY = window.pageYOffset,
    previousY,
    windowHeight = window.innerHeight,
    resize,
    mousemove = true,
    $parallax = false; // By default there is no $parallax element and mousemove variable for the carousel. Add the $parallax element in the script tag on pages with the element. There is no need to define mousemove though.

// Resize listener to detect window size changes
window.addEventListener('resize', function() {
	resize = true;
	windowHeight = window.innerHeight;
});

// The scrolling function that gets called 60 times a second to ensure smooth performance. The $parallax refers to the top element which would have a parallax effect when scrolling down. $parallax needs to be initialised separately for each individual page which needs it
function scrolling() {
	latestY = window.pageYOffset;
	if (latestY != previousY || resize) {
		if (resize) resize = false;
		if ($parallax && latestY <= windowHeight) {
			$parallax.style.transform = 'translate3d(0,' + Math.round(Math.pow(latestY,.85)/(2*Math.pow(windowHeight,-.15))*1e2)/1e2 + 'px,0)';
		}
	}
	if (mousemove && latestY < 10) {
		$navbar.classList.remove('hide');
		if ($parallax) $parallax.classList.add('mousemove');
	}
	else {
		if (!mousemove && latestY < 10) $navbar.classList.add('hide');
		if ($parallax) $parallax.classList.remove('mousemove');
	}
	if (latestY > previousY && latestY >= 10) {
		$navbar.classList.add('hide');
	}
	if (latestY >= 10 && latestY < previousY || latestY != previousY && previousY == null) {
		$navbar.classList.remove('hide');
	}
	previousY = latestY;
	requestAnimationFrame(scrolling);
}
scrolling();


// Basic Nav Drawer interactions
var $navdrawer = document.getElementsByClassName('nav-drawer')[0],
    $menu = document.getElementsByClassName('menu')[0],
    $scrim = document.getElementsByClassName('scrim')[0],
    navAppear = false; // check if nav drawer is currently in view
// Click the menu to open the nav drawer
$menu.addEventListener('click', function() {
	navAppear = true;
	$navdrawer.classList.add('active');
	$navdrawer.removeAttribute('style');
	$scrim.removeAttribute('style');
	$html.style.overflow = 'hidden';
});
// Click the scrim to close the nav drawer
$scrim.addEventListener('click', function() {
	navAppear = false;
	$navdrawer.classList.remove('active');
	$navdrawer.removeAttribute('style');
	$scrim.removeAttribute('style');
	$html.removeAttribute('style');
});

// Draggable nav drawer
var $dragnavdrawer = document.getElementsByClassName('drag-nav-drawer')[0],
    initialX = 0, // The starting x-coordinate
    actualX = 0, // The actual x-coordinate of the finger when dragging
    navX = 0, // Similar to above but maximum can only be the nav drawer's width (most of the ime 300px), while actualX can go beyond that. This is to prevent the nav drawer from being dragged to far right and creating an obvious gap on the left
    previousNavX = 0, // The previous value of navX. It is carried over to check for the direction of movement
    diffX = 0, // The diference between previousNavX and current NavX
    dragging = false, // check if user is draggging or not
    navdrawerwidth = $navdrawer.offsetWidth, // Nav Drawer's width. It may change at narrow screen sizes.
    navTranslate, // The x-coordinate to be used for the nav drawer itself
    iterations = 0, // Variables below are used for the transition for the navdrawer (whether it opens or closes) after the user removes finger from the screen
    start,
    total,
    ripplebug; // This is a variable to help in solving a bug where clicking a link in the nav drawer closes the nav drawer

// First checks if passive event listeners are supported. Passive event listeners help to improve touch latency and overall performance.
var supportsPassive = false;
document.createElement("div").addEventListener("test", function() {}, {
	get passive() {
		supportsPassive = true;
		return false;
	}
});
if (supportsPassive) {
	document.addEventListener('touchstart', startDrag, {passive: true});
	document.addEventListener('touchmove', mainDrag, {passive: true});
	document.addEventListener('touchend', endDrag, {passive: true});
	document.addEventListener('touchcancel', endDrag, {passive: true});
}
else {
	document.addEventListener('touchstart', startDrag);
	document.addEventListener('touchmove', mainDrag);
	document.addEventListener('touchend', endDrag);
	document.addEventListener('touchcancel', endDrag);
}
// An easing function for use in opening or closing the navdrawer after the user lifts off his finger after dragging
function easeOutCubic(t, b, c, d) {
	return Math.round((-c*((t=t/d-1)*t*t*t - 1) + b)*10)/10;
}
// The dragging function. Runs 60 times a second
function navDragging() {
	if (dragging == 'started') {
		requestAnimationFrame(navDragging);
		return false;
	}
	if (dragging) navTranslate = navX - navdrawerwidth;
	$navdrawer.style.transform = 'translate3d(' + navTranslate + 'px,0,0)';
	$scrim.style.opacity = Math.round((navTranslate + navdrawerwidth)/navdrawerwidth*1e2)/1e2;
	if (dragging) {
		iterations = 0;
		requestAnimationFrame(navDragging);
	}
	// When dragging the nav drawer into view but force is not enough OR dragging it out of view and force is enough
	else if (diffX <= -2 || -2 < diffX && diffX < 2 && navX < navdrawerwidth/2) {
		start = navTranslate;
		total = 220;
		if (diffX >= 4 || diffX < -4) total = Math.round(-2 * Math.abs(diffX) + 220);
		if (diffX >= 100 || diffX <= -100) total = 20;
		navTranslate = easeOutCubic(iterations, start, 0 - navdrawerwidth - start, total);
		iterations++;
		if (iterations < total && start != -navdrawerwidth) requestAnimationFrame(navDragging);
		else {
			iterations = 0;
			$navdrawer.removeAttribute('style');
			$scrim.removeAttribute('style');
			$navdrawer.classList.remove('active');
			$html.removeAttribute('style');
		}
	}
	// When dragging the nav drawer into view and force is enough OR dragging it out of view but force is not enough
	else {
		start = navTranslate;
		total = 220;
		if (diffX >= 4 || diffX < -4) total = Math.round(-2 * Math.abs(diffX) + 220);
		if (diffX >= 100 || diffX <= -100) total = 20;
		navTranslate = easeOutCubic(iterations, start, -start, total);
		iterations++;
		if (iterations < total && start != 0 && !ripplebug) requestAnimationFrame(navDragging);
		else {
			iterations = 0;
			$navdrawer.removeAttribute('style');
			$scrim.removeAttribute('style');
		}
		if (ripplebug) ripplebug = false;
	}
}
// The initial touch
function startDrag(e) {
    // If user's touch is on the left edge on the screen
	if (e.target == $dragnavdrawer) {
		dragging = true;
		navdrawerwidth = $navdrawer.offsetWidth;
		actualX = previousNavX = navX = Math.round(e.touches[0].clientX*10)/10;
		requestAnimationFrame(navDragging);
		$navdrawer.classList.add('active');
	}
    // If nav drawer is already open and user's touch is anywhere on the screen
	if (navAppear) {
		dragging = 'started';
		navdrawerwidth = $navdrawer.offsetWidth;
		actualX = initialX = Math.round(e.touches[0].clientX*10)/10;
		// previousNavX = navX = Math.round(e.touches[0].clientX*10)/10 - initialX + navdrawerwidth; Simplified
		previousNavX = navX = navdrawerwidth;
		diffX = 0;
		cancelAnimationFrame(navDragging);
		navDragging();
	}
}
// Dragging
function mainDrag(e) {
	if (e.target == $dragnavdrawer) {
		$navdrawer.style.transition = 'none';
		$scrim.style.transition = 'none';
		actualX = Math.round(e.touches[0].clientX*10)/10;
		if (actualX >= navdrawerwidth) navX = navdrawerwidth;
		else navX = actualX;
		diffX = navX - previousNavX;
		previousNavX = navX;
		$html.style.overflow = 'hidden';
	}
	if (navAppear) {
		dragging = true;
		$navdrawer.style.transition = 'none';
		$scrim.style.transition = 'none';
		actualX = Math.round(e.touches[0].clientX*10)/10;
		if (actualX >= initialX) navX = navdrawerwidth;
		else navX = Math.round(e.touches[0].clientX*10)/10 - initialX + navdrawerwidth;
		diffX = navX - previousNavX;
		previousNavX = navX;
	}
}
// Finger leaves the screen
function endDrag(e) {
	if (e.target == $dragnavdrawer) {
		dragging = false;
		if (diffX >= 2 || -2 < diffX && diffX < 2 && navX > navdrawerwidth/2) navAppear = true;
	}
	if (navAppear) {
		if (dragging = 'started') ripplebug = true;
		dragging = false;
		if (diffX < -2 || -2 < diffX && diffX < 2 && navX <= navdrawerwidth/2) navAppear = false;
	}
}

// Toggle class when a dropdown is clicked
var $dropdown = document.querySelectorAll('.nav-drawer ul li.dropdown > a'),
    d; // d is the number of dropdowns - 1
// Selects all dropdowns and adds a click listener
for (var d = 0; d < $dropdown.length; d++) {
	$dropdown[d].addEventListener('click', function() {
		this.parentElement.classList.toggle('dropdown-open');
	});
}


// Mouse hover effect + Ripple Effect
var $ripplelist = document.querySelectorAll('.nav-drawer ul li a, button'), // The elements to which a ripple effect is added to
    rippledown = false, // a boolean which states if the button is creatly being held and the ripple is activ
    x, // x-coordinate of ripple circle's centre
    y, // y-coordinate of ripple circle's centre
    rippletimer = 0; // To prevent the ripple from disappearing to fast if the click was very fast

// Activate the ripple effect be adding a 'div' with the class of 'ripple' to every element in the $ripplelist. Also adds the event listeners.
for (var i = 0; i < $ripplelist.length; i++) {
	var $div = document.createElement('DIV');
	$div.className = 'ripple';
	if ($ripplelist[i].tagName == 'A') $ripplelist[i].parentElement.appendChild($div);
	else $ripplelist[i].children[0].appendChild($div);
	$ripplelist[i].addEventListener('pointerdown', function(e) {
		rippleDown(this, e);
	});
	$ripplelist[i].addEventListener('pointerup', function(e) {
		rippleUp(this, e);
	});
	$ripplelist[i].addEventListener('pointerleave', function(e) {
		rippleUp(this, e);
		hover(this, e, 'leave');
	});
	$ripplelist[i].addEventListener('pointerenter', function(e) {
		hover(this, e, 'enter');
	});
}
// This hover effect is needed to replace CSS ':hover' because ':hover' also happens with touchscreens which isn't ideal. Hover effects can only happen with a mouse.
function hover(element, e, direction) {
	if (e.pointerType == 'touch') return false;
	if (direction == 'enter') element.classList.add('hover');
	else element.classList.remove('hover');
}
function rippleDown(element, e) {
	rippledown = true;
	if (element.tagName == 'A') var target = element.parentElement.lastElementChild;
	else var target = element.children[0].lastElementChild;
	if (rippletimer) {
		clearTimeout(rippletimer);
		timer2 = rippletimer;
		target.classList.remove('appear');
	}
	target.classList.remove('fade-out', 'finish');
	x = Math.round(e.clientX - element.getBoundingClientRect().left);
	y = Math.round(e.clientY - element.getBoundingClientRect().top);
	var radius = Math.max(Math.sqrt(x*x + y*y),
	                      Math.sqrt(x*x + (element.offsetHeight-y)*(element.offsetHeight-y)),
					      Math.sqrt((element.offsetWidth-x)*(element.offsetWidth-x) + y*y),
				 	      Math.sqrt((element.offsetWidth-x)*(element.offsetWidth-x) + (element.offsetHeight-y)*(element.offsetHeight-y)));
	target.style.height = target.style.width = radius * 2 + 'px';
	target.style.top = y + 'px';
	target.style.left = x + 'px';
	target.classList.add('appear');
	rippletimer = setTimeout(function() {
		target.classList.add('finish');
		if (target.classList.contains('fade-out')) target.classList.remove('appear');
		rippletimer = 0;
	}, 400);
}
function rippleUp(element, e) {
	rippledown = false;
	if (element.tagName == 'A') var target = element.parentElement.lastElementChild;
	else var target = element.children[0].lastElementChild;
	target.classList.add('fade-out');
	if (!rippletimer) target.classList.remove('appear');
	setTimeout(function() {
		if (rippledown == false && target.classList.contains('appear')) {
			target.classList.add('finish');
			target.classList.remove('appear');
		}
	}, 400);
}
