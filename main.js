const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-menu_link');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});




// Telegram channel @FrontendPortal
const boxes = document.querySelectorAll('.glass');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;
	boxes.forEach((box, idx) => {
		const boxTop = box.getBoundingClientRect().top;
		
		if(boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
}