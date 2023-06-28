export const elementos = {
	menu: $(".menu"),
	botaoMenu: $(".menu__item--button"),
	allLinks: $(".menu__item"),
	hideLinks: $(".menu__item")
		.not(":first-child")
		.not(".menu__item--button"),
	elmSecoes : {
		sec1 : $("#inicio"),
		sec2 : $("#sobre"),
		sec3 : $("#portfolio"),
		sec4 : $("#contato")
	},
	parallaxs : $(".parallax")
};
