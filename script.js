
const listProdutosServico = document.getElementById('lista-produtos-servico')
const inputProdutosServico = document.getElementById('input-produtos-servico')
const btnCadProdutosServico = document.getElementById('btn-cadastro-produto-servico')

const listClientes = document.getElementById('lista-clientes')
const inputClientes = document.getElementById('input-cliente')
const btnCadClientes = document.getElementById('btn-cadastro-cliente')

// cadastro de produtos e serviços // editar cadastro
btnCadProdutosServico.addEventListener('click', () => {
const newList = document.createElement('li')
newList.className = 'produto-servico'
newList.innerHTML = inputProdutosServico.value;
listProdutosServico.appendChild(newList)  
})

listProdutosServico.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
 }
)

// end 


// cadastro de clientes // editar cadastro
btnCadClientes.addEventListener('click', () => {
const newList = document.createElement('li')
newList.className = 'clientes'
newList.innerHTML = inputClientes.value;
listClientes.appendChild(newList)  
})

listClientes.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'yellow'
 })
// end



