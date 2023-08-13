// Obter a altura de todas as seções da página
const secao01Altura = $("#apresentacao").outerHeight();
const secao02Altura = $("#sobre").outerHeight();
const secao03Altura = $("#portfolio").outerHeight();
const parallax01Altura = $("#para01").outerHeight();
const parallax02Altura = $("#para02").outerHeight();
const parallax03Altura = $("#para03").outerHeight();

// Função para remover classe .w3-white do menu de navegação
const removeClasseTeal = () => $(".w3-links-js").removeClass("w3-white");

export default function menuMarcador() {
   // Remover classe .w3-white de todos os links do menu
   removeClasseTeal();

   // Adicionar a classe .w3-white ao link clicado
   // $(this).addClass("w3-white");

   // Se a página estiver na seção "Home"
   if ($(window).scrollTop() >= 0) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // Significa que o usuário está sobre a seção "home"
      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-links-js").eq(0).addClass("w3-white");
   }

   // Se a página estiver na seção "Sobre"
   // e um pouco menos de 50px de altura
   if ($(window).scrollTop() >= (secao01Altura + parallax01Altura - 150)) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // Significa que o usuário está sobre a seção "sobre"
      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(0).addClass("w3-white");
   }

   // Se a página estiver na seção "Portfólio"
   // e um pouco menos de 50px de altura
   if ($(window).scrollTop() >= (
      secao01Altura +
      parallax01Altura +
      secao02Altura +
      parallax02Altura - 150)) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // Significa que o usuário está sobre a seção "portfólio"
      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(1).addClass("w3-white");
   }

   // Se a página estiver na seção "Contato"
   // e um pouco menos de 50px de altura
   if ($(window).scrollTop() >= (
      secao01Altura +
      parallax01Altura +
      secao02Altura +
      parallax02Altura +
      secao03Altura +
      parallax03Altura - 50)) {
      // Remover classe .w3-white de todos os links do menu
      removeClasseTeal();

      // Significa que o usuário está sobre a seção "contato"
      // adiciona o marcador apenas ao link do menu que corresponde
      $(".w3-menu .w3-links-js").eq(2).addClass("w3-white");
   }
}
