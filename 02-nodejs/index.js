// Obter usuário
// Obter o número de telefone de um usuário a partir de seu id
// Obter o endereço do usuário pelo id

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '33333333',
            ddd: 34
        });
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos Andradas',
            numero: 50
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
    
    if (error) {
        console.error('Erro em usuário', error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Erro em Telefone', error);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Erro em Endereço', error);
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereço: Rua ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        });
    });
});
// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone);