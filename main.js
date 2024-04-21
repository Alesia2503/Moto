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
// const boxes = document.querySelectorAll('.glass');
// window.addEventListener('scroll', checkBoxes);
// checkBoxes();

// function checkBoxes() {
// 	const triggerBottom = window.innerHeight / 5 * 4;
// 	boxes.forEach((box, idx) => {
// 		const boxTop = box.getBoundingClientRect().top;
		
// 		if(boxTop < triggerBottom) {
// 			box.classList.add('show');
// 		} else {
// 			box.classList.remove('show');
// 		}
// 	});
// }



const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector(".nav_wrap").cloneNode(1);
const logo = document.querySelector(".header_logo").cloneNode(1)

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
  popup.appendChild(logo)
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}










const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}




let video1 = document.querySelector('.video1')
let video2 = document.querySelector('.video2')
let video3 = document.querySelector('.video3')
let btn1 = document.querySelector('.bar11')
let btn2 = document.querySelector('.bar22')
let btn3 = document.querySelector('.bar33')
btn1.addEventListener('click', ()=> {
  if (video1.play) {
    video1.pause();
  } 
  if (video2.play) {
    video2.pause();
  };
  if (video3.play) {
    video3.pause();
  };
});
btn2.addEventListener('click', ()=> {
  if (video1.play) {
    video1.pause();
  };
  if (video2.play) {
    video2.pause();
  };
  if (video3.play) {
    video3.pause();
  };
  
});
btn3.addEventListener('click', ()=> {
  if (video1.play) {
    video1.pause();
  } 
  if (video2.play) {
    video2.pause();
  };
  if (video3.play) {
    video3.pause();
  };
});