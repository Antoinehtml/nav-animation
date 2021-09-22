document.addEventListener("DOMContentLoaded", (event) => {
	const revealerNav = window.revealer({
		revealElementSelector: ".nav-js",
		options: {
			anchorSelector: ".nav-btn-js"
		}
	});

	const actionBtn = document.querySelector(".nav-btn-js")

	actionBtn.addEventListener('click', (event) => {
		if(!revealerNav.isRevealed()){
			revealerNav.reveal();
			actionBtn.setAttribute("data-open", true);
		} else {
			revealerNav.hide();
			actionBtn.setAttribute("data-open", false);
		}
	})
})


const pageTransition = () => {
	var tl = gsap.timeline();

	tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "top right", stagger: .2})
	tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "top right", stagger: .1, delay: .1})
}

const contentAnimation = () => {
	var tl = gsap.timeline();

	tl.from('.left', {duration: 1.5, translateY: 50, opacity: 0})
}


function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init({
	sync:true,

	transitions: [{
		async leave(data){
			const done = this.async();

			pageTransition();
			await delay(1500);
			done();
		}

	}]
})








