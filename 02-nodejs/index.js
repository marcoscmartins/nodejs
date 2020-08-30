// Obter usuário
// Obter o número de telefone de um usuário a partir de seu id
// Obter o endereço do usuário pelo id

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)



function obterUsuario() 
{
    // Quando der algum problema -> reject (ERRO)
    // Quando der sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            // return reject(new Error('Problema na promise'));
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            });
        }, 1000);
    });

    
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '33333333',
                ddd: 34
            });
        }, 2000)
    });
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos Andradas',
            numero: 50
        })
    }, 2000);
}

const usuarioPromise = obterUsuario();
// para manipular o sucesso usamos a função .then
// para manipular erros usamos o .catch
usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `);
    })
    .catch(function(error) {
        console.error('Problema', error);
    });

// obterUsuario(function resolverUsuario(error, usuario) {
    
//     if (error) {
//         console.error('Erro em usuário', error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.error('Erro em Telefone', error);
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error('Erro em Endereço', error);
//                 return;
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereço: Rua ${endereco.rua}, ${endereco.numero}
//                 Telefone: (${telefone.ddd}) ${telefone.telefone}
//             `);
//         });
//     });
// });