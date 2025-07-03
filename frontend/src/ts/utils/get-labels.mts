export function getLabels(className: string) {
	const $labels = document.querySelectorAll(
		className
	) as NodeListOf<HTMLLabelElement>
	return $labels
}
