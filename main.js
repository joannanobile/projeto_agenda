document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Cria uma nova linha para a tabela
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insere células na nova linha
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    // Define o conteúdo das células
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Limpa os campos do formulário
    document.getElementById('contactForm').reset();
});