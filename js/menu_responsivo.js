const $menu = $(".w3-menu");

export function menuResponsivo() {

	// Abrir e fechar menu responsivo de forma dinâmica
	$menu.fadeToggle("slow");
 
	$menu.parent()
		.find(".w3-bar-item")
		.addClass('w3-center');

	$("#backgroundCloseMenu").toggleClass("w3-show");
}

export function fecharMenuPeloFundo() {
	$menu.fadeOut("slow");
	$(this).removeClass("w3-show");
}