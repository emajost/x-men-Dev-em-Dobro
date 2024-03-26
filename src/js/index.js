//adicionar a borda azul

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //verificar se ja existe um personagem selecionado
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        //adiciona a classe "selecionado"
        personagem.classList.add('selecionado');

        //Pegar elementos dos personagens grandes
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem);
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        console.log(nomePersonagem);

        //Alterar a descrição
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})