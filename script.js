const buttonSave = document.querySelector('#save')

const addItem = () =>{
        const area = document.getElementById('area')
        const bairro = document.getElementById('bairro')
        const numero = document.getElementById('numero')
        const cidade = document.getElementById('cidade')

        //Criação da Tag li dentro do elemento UL
        const criarItemLista = document.createElement('li')
        const lista = document.getElementById('ul')
        lista.appendChild(criarItemLista)

        // Criação do item na lista
        const itemLista = lista.lastChild
        itemLista.innerHTML = `${area.value}m², número ${numero.value}( ${bairro.value} - ${cidade.value} )   ` 
        
        // Criação do botão remover dentro da li
        const createButtonRemove = document.createElement('button')
        itemLista.appendChild(createButtonRemove)

        const buttonRemove = itemLista.lastChild
        buttonRemove.innerHTML = 'Remover'

        // Para Limpar e voltar para a textbox de área
        area.value = ``
        bairro.value = ``
        numero.value = ``
        cidade.value = ``
        area.focus()

        // Evento do botão Remover
        const removeItem = () =>{
            buttonRemove.parentNode.remove()
        }
        buttonRemove.addEventListener('click', removeItem)
}
        
    
    buttonSave.addEventListener('click', addItem)
