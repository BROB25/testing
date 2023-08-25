export function animateElements() {
	const elements = document.querySelectorAll(
		".slide-up, .slide-left, .slide-right, .slide-down"
	);
	elements.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top;
		const elementBottom = element.getBoundingClientRect().bottom;
		const windowHeight = window.innerHeight;
		const isElementInView = elementTop < windowHeight && elementBottom > 0;

		if (isElementInView) {
			element.classList.add("show");
		} else {
			element.classList.remove("show");
		}
	});
}

window.addEventListener("scroll", animateElements);

export function checkSlide() {
	const elements = document.querySelectorAll(
		".slide-left, .slide-right, .slide-down, .slide-up"
	);
	elements.forEach((element) => {
		const slideInAt =
			window.scrollY + window.innerHeight - element.clientHeight / 2;
		const elementBottom = element.offsetTop + element.clientHeight;
		const isHalfShown = slideInAt > element.offsetTop;
		const isNotScrolledPast = window.scrollY < elementBottom;
		if (isHalfShown && isNotScrolledPast) {
			element.classList.add("slide-up");
		} else {
			element.classList.remove("slide-up");
		}
	});
}

window.addEventListener("scroll", debounce(checkSlide));

export function debounce(func, wait = 20) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}

checkSlide();
