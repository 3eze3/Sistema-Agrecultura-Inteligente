const $inputUser = document.getElementById('username') as HTMLInputElement
const $inputPasswd = document.getElementById('password') as HTMLInputElement
export function login() {
	const $btn = document.getElementById('log-in') as HTMLButtonElement
	$btn.addEventListener('click', (e) => {
		e.preventDefault()
		if (isEmpty() || !isValid()) return
		getMonitorPage()
		window.location.href = 'monitor.html'
	})
}

window.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !isEmpty() && isValid()) {
		getMonitorPage()
	}
})

const isEmpty = () => {
	return $inputUser.value.trim() == '' || $inputPasswd.value.trim() == ''
}

const isValid = () => {
	return (
		$inputUser.value.trim() == 'root' || $inputPasswd.value.trim() == 'root'
	)
}

const getMonitorPage = () => {
	window.location.href = 'monitor.html'
}
