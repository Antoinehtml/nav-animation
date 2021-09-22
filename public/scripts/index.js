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
