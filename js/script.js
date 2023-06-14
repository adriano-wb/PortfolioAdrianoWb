$(() => {
	// Obter a altura de todas as seções da página
	const parteUmAltura = $("#apresentacao").outerHeight();
	const parteDoisAltura = $("#sobre").outerHeight();
	const parteTresAltura = $("#portfolio").outerHeight();
	const parteQuatroAltura = $("#contato").outerHeight();
	const parallaxUmAltura = $("#para1").outerHeight();
	const parallaxDoisAltura = $("#para2").outerHeight();
	const parallaxTresAltura = $("#para3").outerHeight();

	// Ao clicar no botão de abrir e fechar o menu de navegação
	$(".botao").on("click", () => {
		
		// Exibe ou ocultar os links ocultos
		$("#itemsOcultos").toggle();	
		
		// Alterna entre o ícone de "X" quando aberto
		// e o icone de hamburguer quando fechado
		$(".icon-botao-menu")
		.toggleClass("fa-bars")
		.toggleClass("fa-xmark");
		
		// Alterna a cor do fundo do botão para metálica quando fechado
		// e um vermelho(ketcup) quando aberto
		// $(".botao")
		// .toggleClass("w3-theme-l3")
		// .toggleClass("w3-red");
	});
	
	// Reseta todos os marcadores de links do menu
	// que mostram a seção atual na cor ciano(cyan)
	function removerCyan() {
		$(".w3-links-js").removeClass("w3-theme-d3");
	}
	
	// Por padrão o primeiro link de "Home" é marcado
	// cor a cor cyan que corresponde a seção atual.
	$("a[href='#inicio']").addClass("w3-theme-d3");
	
	// Ao clicar em algum link do menu de navegação
	$(".w3-links-js").on("click", () => {
		// Reseta/remove todos os marcadores dos links 
		// no menu de navegação
		removerCyan();
		
		// E adiciona o marcador apenas ao selecionado
		$(".w3-links-js").addClass("w3-theme-d3");
	});
	
	
	// Fazer com que os links destacados do
	// menu sejam os que mostrem a seção atual
	function marcacaoDeLinksNoScroll() {
		
		// Se a página estiver na seção "Home"
		if (window.scrollY >= 0) {
			// Reseta/remove todos os marcadores dos links 
			// no menu de navegação
			removerCyan();
			
			// Significa que o usuário está sobre a seção "home"
			// adiciona o marcador apenas ao link do menu que corresponde
			$(".w3-links-js").eq(0).addClass("w3-theme-d3");
		}
		
		// Se a página estiver na seção "Sobre"
		// e um pouco menos de 50px de altura
		if (window.scrollY >= (parteUmAltura + parallaxUmAltura-50)) {
			// Reseta/remove todos os marcadores dos links 
			// no menu de navegação
			removerCyan();
			
			// Significa que o usuário está sobre a seção "sobre"
			// adiciona o marcador apenas ao link do menu que corresponde
			$(".w3-links-js").eq(1).addClass("w3-theme-d3");
		}
		
		// Se a página estiver na seção "Portfólio"
		// e um pouco menos de 50px de altura
		if (window.scrollY >= (
				parteUmAltura + 
				parallaxUmAltura + 
				parteDoisAltura + 
				parallaxDoisAltura - 50)) {
			// Reseta/remove todos os marcadores dos links 
			// no menu de navegação
			removerCyan();
			
			// Significa que o usuário está sobre a seção "portfólio"
			// adiciona o marcador apenas ao link do menu que corresponde
			$(".w3-links-js").eq(2).addClass("w3-theme-d3");
		} 
		
		// Se a página estiver na seção "Contato"
		// e um pouco menos de 50px de altura
		if (window.scrollY >= (
				parteUmAltura + 
				parallaxUmAltura + 
				parteDoisAltura + 
				parallaxDoisAltura + 
				parteTresAltura +
				parallaxTresAltura -50)) {
			// Reseta/remove todos os marcadores dos links 
			// no menu de navegação
			removerCyan();
			
			// Significa que o usuário está sobre a seção "contato"
			// adiciona o marcador apenas ao link do menu que corresponde
			$(".w3-links-js").eq(3).addClass("w3-theme-d3");
		} 
	}
	
	$(window).on("load", marcacaoDeLinksNoScroll); 
	$(window).on("scroll", marcacaoDeLinksNoScroll); 
})
