import menuResponsivo from "./menu_responsivo.js";
import menuDeslize from "./menu_deslize.js";
import menuMarcador from "./menu_marcador.js";

$(() => {
	$(".w3-btn-menu").on("click", menuResponsivo);
	$(".w3-links-js").on("click", menuDeslize);
	$(window).on("load", menuMarcador); 
	$(window).on("scroll", menuMarcador); 
});