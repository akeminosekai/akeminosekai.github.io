const bt = document.getElementById('btTop')
window.addEventListener('scroll', () => {
	bt.style.display = window.scrollY > 300 ? 'flex' : 'none'
})
bt.addEventListener('click', () => {
	document.body.scrollIntoView({
		block: 'start', behavior: 'smooth'
	})
})
