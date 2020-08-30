// Obter usuário
// Obter o número de telefone de um usuário a partir de seu id
// Obter o endereço do usuário pelo id

function obterUsuario() {
    setTimeout(function() {
        return {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }
    }, 1000);
}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '33333333',
            ddd: 34
        }
    }, 2000)
}

function obterEndereco(idUsuario) {

}

const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);

console.log('usuario', usuario);
console.log('telefone', telefone);