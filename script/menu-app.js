import {elementos} from "./elementos.js";

$(() => {
	const objJanela = $(window);
	
	class Menu {
		public constructor(public elementos) {
			// Obtêm o elemento menu
			this.menu = elementos.menu;
			
			// Seções
			this.secoes = elementos.elmSecoes;
			
			// Links ocultados
			this.hideLinks = elementos.hideLinks;
			this.parallaxs = elementos.parallaxs;
			
			// Obtêm o elemento usado como botão para
			// abrir e fechar o menu
			this.botaoMenu = elementos.botaoMenu;
			
			this.allLinks = elementos.allLinks;
		}
			
		protected parteUmAltura():number {
			return this.secoes.sec1.find(".capa").outerHeight(true);
		}
		
		protected parteDoisAltura():number {
			return this.secoes.sec2.outerHeight(true);
		}
		
		protected parteTresAltura():number {
			return this.secoes.sec3.outerHeight(true);
		}
		
		protected parallaxUmAltura():number {
			return this.parallaxs.eq(0).outerHeight(true);
		}
		
		protected parallaxDoisAltura():number {
			return this.parallaxs.eq(1).outerHeight(true);
		}
		
		protected parallaxTresAltura():number {
			return this.parallaxs.eq(2).outerHeight(true);
		}
		
		// Função para remover destaque/resetar todos os links
		public resetarTodosOsLinksDestacados():void {
			$(this.allLinks).removeClass("menu__item--active");
		}
		
		// Função para abrir ou fechar menu de navegação
		public abrirOuFecharMenu():void {
			$(this.hideLinks).slideToggle();
			$(".icon")
				.toggleClass("fa-bars")
				.toggleClass("fa-xmark")
				.toggleClass("text-red");
				
			$(".menu__item--button i").toggleClass(".text-red");
		}
		
		// Função para realçar links ao rolar página
		public rolagemDestacaODeterminadoLink():void {	
		
			// Se a página estiver na seção "Home"
			if (objJanela.scrollTop() >= 0) {
				// Reseta/remove todos os marcadores dos links 
				// no menu de navegação
				this.resetarTodosOsLinksDestacados();
				
				// Significa que o usuário está sobre a seção "home"
				// adiciona o marcador apenas ao link do menu que corresponde
				$(this.allLinks).eq(0).addClass("menu__item--active");
			}
		
			// Se a página estiver na seção "Sobre"
			// e um pouco menos de 50px de altura
			if (objJanela.scrollTop() >= (this.parteUmAltura() + this.parallaxUmAltura()-120)) {
				// Reseta/remove todos os marcadores dos links 
				// no menu de navegação
				this.resetarTodosOsLinksDestacados();
				
				// Significa que o usuário está sobre a seção "sobre"
				// adiciona o marcador apenas ao link do menu que corresponde
				$(this.allLinks).eq(1).addClass("menu__item--active");
			}
		
			// Se a página estiver na seção "Portfólio"
			// e um pouco menos de 50px de altura
			if (objJanela.scrollTop() >= (
					this.parteUmAltura() + 
					this.parallaxUmAltura() + 
					this.parteDoisAltura() + 
					this.parallaxDoisAltura() - 120)) {
				// Reseta/remove todos os marcadores dos links 
				// no menu de navegação
				this.resetarTodosOsLinksDestacados();
				
				// Significa que o usuário está sobre a seção "portfólio"
				// adiciona o marcador apenas ao link do menu que corresponde
				$(this.allLinks).eq(2).addClass("menu__item--active");
			} 
			
			// Se a página estiver na seção "Contato"
			// e um pouco menos de 50px de altura
			if (objJanela.scrollTop() >= (
					this.parteUmAltura() + 
					this.parallaxUmAltura() + 
					this.parteDoisAltura() + 
					this.parallaxDoisAltura() + 
					this.parteTresAltura() +
					this.parallaxTresAltura() -120)) {
				// Reseta/remove todos os marcadores dos links 
				// no menu de navegação
				this.resetarTodosOsLinksDestacados();
				
				// Significa que o usuário está sobre a seção "contato"
				// adiciona o marcador apenas ao link do menu que corresponde
				$(this.allLinks).eq(3).addClass("menu__item--active");
			} 
		}
	
		public rolarPaginaSuavimenteAoClicarEmLinks(e) {
			if (e.target.hash !== '') {
				e.preventDefault();
				const hash = e.target.hash;
				$('html, body').animate({
          scrollTop: $(hash).offset().top-80
        },
					800 // Velocidade de deslizamento em milissegundos
				);
			}
		}
	}
	
	const menu: Menu = new Menu(elementos); 
	
	menu.botaoMenu.on("click", () => menu.abrirOuFecharMenu());
	objJanela.on("load", menu.rolagemDestacaODeterminadoLink()); 
	objJanela.on("scroll", () => menu.rolagemDestacaODeterminadoLink());
	menu.allLinks.on("click", () => menu.rolarPaginaSuavimenteAoClicarEmLinks(event));
})
