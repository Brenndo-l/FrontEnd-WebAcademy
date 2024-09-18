carregaProfissionais = () =>{               //Objeto que guarda
    let xhr = new XMLHttpRequest(); // Objeto de requisição assincrona
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";  //server que tem os scripts
    xhr.open('GET', url); // Fazendo requisição dos dados
    let tabela = document.querySelector('table'); //
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200){  //Verificando resposta
            let dados = JSON.parse(xhr.responseText); // Armazenando os dadosJSON em uma array
            for (profissional of dados){
                //Criando elementos HTML
                let linha = document.createElement('tr');
                let id = document.createElement('td');
                let nome = document.createElement('td');
                let registro = document.createElement('td');
                let telefone = document.createElement('td');
                let email = document.createElement('td');
                let especialidade = document.createElement('td');
                let unidade = document.createElement('td');
                let opcoes = document.createElement('td');
                //Preenchendo os elementos HTML
                id.textContent = profissional.id;
                nome.textContent = profissional.nome;
                registro.textContent = profissional.registro;
                telefone.textContent = profissional.telefone;
                email.textContent = profissional.email;
                especialidade.textContent = profissional.especialidade;
                unidade.textContent = profissional.unidade;
                opcoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a class="botaored" href="javascript:void(0)">Excluir</a>`;
                // Preenchendo linha ('tr')
                linha.appendChild(id);
                linha.appendChild(nome);
                linha.appendChild(registro);
                linha.appendChild(telefone);
                linha.appendChild(email);
                linha.appendChild(unidade);
                linha.appendChild(especialidade);
                linha.appendChild(opcoes);
                tabela.tBodies[0].appendChild(linha); // Preenchendo tabela

            }
        }
            
    });
        xhr.send();
};
 carregaProfissionais()

 //Inserir profissional
inserirProfissional = () =>{
    
}