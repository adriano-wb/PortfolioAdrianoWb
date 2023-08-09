export default function menuDeslize(e) {
   // Se os "href" dos links não forem "#"
   if (this.hash !== "") {
      
      // Prevenir o comportamento padrão do link (não ir para a página)
      e.preventDefault();

      // Armazenar o valor do href
      const hash = this.hash;

      // Definir uma animação para rolar o scroll altomaticamente
      $('html, body').animate(
         {
            // Rolar o scroll a partir do topo até o elemento com o id definido no href
            scrollTop: $(hash).offset().top
         },
         800 // Velocidade de deslizamento em milissegundos
      );
   }
}