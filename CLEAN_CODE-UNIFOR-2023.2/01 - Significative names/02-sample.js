function verificaAcesso(usuario) {
    if (usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", isAdmin: false };
verificaAcesso(usuario);
