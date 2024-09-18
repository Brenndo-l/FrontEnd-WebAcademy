carregaProfissionais = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    fetch(url).then(resposta => {
        return resposta.json()
    }).then(dados =>{
        for(const profissional of dados){
            inserirProfissional(profissional);
        }
        excluirLinha();
    })
    // xhr.open('GET', url);
    // let tabela = document.querySelector('table');

    // xhr.addEventListener('readystatechange', () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         let dados = JSON.parse(xhr.responseText);
    //         let idsExistentes = Array.from(tabela.tBodies[0].rows).map(row => parseInt(row.cells[0].textContent));
    //         for (profissional of dados) {
    //             if (!idsExistentes.includes(profissional.id)) {
    //                 inserirProfissional(profissional);
    //             }
    //         }
    //         excluirLinha();
    //     }
    // });
    // xhr.send();
};

// Inserindo Profissional
let form = document.querySelector('form');
let tabela = document.querySelector('table');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    let objeto = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,
        registro: form.registroConselho.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label
    };

    let existe = Array.from(tabela.tBodies[0].rows).some(row => 
        row.cells[1].textContent === objeto.nome && row.cells[2].textContent === objeto.registro
    );

    if (!existe) {
        inserirProfissional(objeto);
        botaoAdicionar.classList.remove('inativo');
        div.classList.add('inativo');
    } else {
        alert("Este profissional já está na lista.");
    }
});

// Função que recebe um objeto do tipo profissional
const inserirProfissional = (profissional) => {
    let linha = document.createElement('tr');
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let registro = document.createElement('td');
    let telefone = document.createElement('td');
    let email = document.createElement('td');
    let especialidade = document.createElement('td');
    let unidade = document.createElement('td');
    let opcoes = document.createElement('td');

    id.textContent = profissional.id;
    nome.textContent = profissional.nome;
    registro.textContent = profissional.registro;
    telefone.textContent = profissional.telefone;
    email.textContent = profissional.email;
    especialidade.textContent = profissional.especialidade;
    unidade.textContent = profissional.unidade;
    opcoes.innerHTML = `<a class="botao_verde" href="javascript:void(0)">Editar</a> <a class="botao_vermelho" href="javascript:void(0)">Excluir</a>`;

    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(registro);
    linha.appendChild(telefone);
    linha.appendChild(email);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(opcoes);
    tabela.tBodies[0].appendChild(linha);

    // Chama a função para adicionar o evento de exclusão
    excluirLinha();
};

carregaProfissionais();

// Botão Adicionar
let botaoAdicionar = document.querySelector('div#add');
let div = document.querySelector('div.inativo');

botaoAdicionar.addEventListener('click', () => {
    div.classList.remove('inativo');
    botaoAdicionar.classList.add('inativo');
    form.reset();
});

// Botão Cancelar
let botaoCancelar = document.querySelector('input[type="button"]');
botaoCancelar.addEventListener('click', () => {
    div.classList.add('inativo');
    botaoAdicionar.classList.remove('inativo');
    form.reset();
});

// Botão excluir
function excluirLinha() {
    botoesExcluir = document.querySelectorAll('a.botao_vermelho');
    for (let botao of botoesExcluir) {
        botao.addEventListener('click', () => {
            botao.parentNode.parentNode.remove();
        });
    }
}
