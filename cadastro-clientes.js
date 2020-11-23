//const formCadastroCliente = document.querySelector('[data-form]')
formCadastroCliente = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr');  
    const conteudoLinha = `
        <div class="alert alert-success" role="alert">
            ${mensagem}
        </div>
    `;
    linha.innerHTML = conteudoLinha;
    return linha;
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
        <div class="alert alert-warning" role="alert">
            ${mensagem}
        </div>
    `;
    linha.innerHTML = conteudoLinha;
    return linha;
}

formCadastroCliente.addEventListener("submit", event =>  {
    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]').value 
    const cpf = event.target.querySelector('[data-cpf]').value
    
    if(validaCPF(cpf) && cpf.length === 11){
        cadastrarClientes(nome, cpf)
        formCadastroCliente.appendChild(mensagemSucesso(
            'Cliente cadastrado com sucesso!'
        ))
    }else{
        alert('O CPF não é válido')
        formCadastroCliente.appendChild(mensagemErro(
            'Erro ao adicionar cliente!'
        ))
    }
})


// formCadastroCliente.addEventListener("submit", event =>  {
//     event.preventDefault()
//     const nome = event.target.querySelector('[data-nome]').value //target == alvo 
//     const cpf = event.target.querySelector('[data-cpf]').value
    
//     if(validaCPF(cpf) && cpf.length === 11){
//         cadastrarClientes(nome, cpf)
//     }else{
//         alert('O CPF não é válido')
//     }
// })
