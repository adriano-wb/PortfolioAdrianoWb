// Função para remover classe .w3-white do menu de navegação
const removeClasseTeal = () => $(".w3-links-js").removeClass("w3-white");

export default function menuMarcador() {
   // Remover classe .w3-white de todos os links do menu
   removeClasseTeal();

   // Se a página estiver na seção "Home"
   if ($(window).scrollTop() >= 0) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-links-js").eq(0).addClass("w3-white");
   }

   // Se a página estiver na seção "Sobre"
   if ($(window).scrollTop() >= $("#sobre").offset().top) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(0).addClass("w3-white");
   }

   // Se a página estiver na seção "Portfélio"
   if ($(window).scrollTop() >= $("#portfolio").offset().top) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(1).addClass("w3-white");
   }

   // Se a página estiver na seção "Contato"
   if ($(window).scrollTop() >= $("#contato").offset().top) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();
      
      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(2).addClass("w3-white");
   }
}
