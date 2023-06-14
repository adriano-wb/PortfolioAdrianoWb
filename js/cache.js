// Verifica se o navegador suporta a API Cache
if ('caches' in window) {
  // Abre ou cria um novo cache com o nome desejado
  caches.open('my-cache').then(function(cache) {
    // Adiciona os arquivos do documento HTML ao cache
    cache.addAll([
      '../css/w3.css',
      '../css/w3-theme-blue.css',
      '../css/customizew3.css',
      'f492772e4b.js',
      'script.js',
      'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js',
			'../img/abertura.webp',
			'../img/autor.webp',
			'../img/bootstrap.webp',
			'../img/css-3.webp',
			'../img/html-5.webp',
			'../img/jquery.webp',
			'../img/js.webp',
			'../img/parallax1.webp',
			'../img/parallax2.webp',
			'../img/parallax3.webp',
			'../img/projeto1multstepform.webp',
			'../img/projeto2cardsdetailsform.webp',
			'../img/projeto3ecommerce.webp',
			'../img/projeto4mainhomepage.webp',
			'../img/projeto5cardcomponent.webp',
			'../img/projeto6ecommerce2.webp',
			'../img/sass.webp',
			'../img/typescript.webp'
      // adicione outros arquivos que deseja armazenar em cache
    ]);
  });
}
