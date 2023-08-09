export default function menuResponsivo() {
	const $menu = $(".w3-menu");
	$menu.fadeToggle('slow');
	$menu.parent()
		.find(".w3-bar-item")
		.toggleClass('w3-center');
}