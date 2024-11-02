var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
      
      const quadradoTamanho = 150;
      const background = document.querySelector(".background-3");
      const elementoTamanho = background.getBoundingClientRect(); // Obter as dimensões do elemento
      const width = screen.width
      const height = screen.height


      // Gerar números aleatórios para as coordenadas X e Y, considerando o tamanho do elemento
      const x = Math.random() * (quadradoTamanho - width);
      const y = Math.random() * (quadradoTamanho - height);
      
      // Aplicar a transformação
      btn.style.transform = `translate(${x}px, ${y}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 50);
    }
});

btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        const quadradoTamanho = 150;
        const background = document.querySelector(".background-3");
        const elementoTamanho = background.getBoundingClientRect(); // Obter as dimensões do elemento
        const width = screen.width
        const height = screen.height


        // Gerar números aleatórios para as coordenadas X e Y, considerando o tamanho do elemento
        const x = Math.random() * (quadradoTamanho - width);
        const y = Math.random() * (quadradoTamanho - height);
        
        // Aplicar a transformação
        btn.style.transform = `translate(${x}px, ${y}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {
enviarMensagemDiscord("Ela/Ele aceitou S2<:havenzinha:1287286613969473616>")
let timerInterval
Swal.fire({
  title: '😍',
  html: 'Nem 1 milhão de linhas de código seriam capazes de registrar o amor que sinto por você, linda <3. 💘',
  timer: 7000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

});


function enviarMensagemDiscord(mensagem) {
  const webhookUrl = 'https://discord.com/api/webhooks/1113142436500344852/F7IX3nXQHCqeRf4NI4nM4zAtNZGL3pG66IThe_2ytGJ8vFsZDEcQgdMDVH9cYf7xc-iO'; // Substitua por seu URL

  // Construindo o payload
  const payload = JSON.stringify({
      content: mensagem,
      // Outros campos podem ser adicionados conforme a documentação do Discord
  });

  // Enviando a requisição
  fetch(webhookUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: payload
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Falha ao enviar mensagem para o Discord');
      }
      console.log('Mensagem enviada com sucesso!');
  })
  .catch(error => {
      console.error('Erro ao enviar mensagem:', error);
  });
}