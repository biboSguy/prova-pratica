let usuarios = [];
console.log(usuarios);

function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email) {
        console.log('Erro: Todos os campos devem ser preenchidos.');
        return;
    }
    
    if (idade <= 0) {
        console.log('Erro: A idade deve ser maior que 0.');
        return;
    }
    
    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    
    usuarios.push(usuario);
}

adicionarUsuario("enzo", 16, "enzo@gmail.com");
adicionarUsuario("matheus", 18, "matheus@gmail.com");

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    console.log('Usuários cadastrados:');
    usuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}: Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}
listarUsuarios();