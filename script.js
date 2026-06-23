// Encontrar os elementos no HTML
const telaApresentacao  = document.getElementById('tela-apresentacao');
const telaLogin         = document.getElementById('tela-login');
const telaCadastro      = document.getElementById('tela-cadastro');
const app               = document.getElementById('app');

const btnAcessar        = document.getElementById('btn-acessar');
const formLogin         = document.getElementById('form-login');
const inputEmail        = document.getElementById('input-email');
const inputSenha        = document.getElementById('input-senha');
const msgErro           = document.getElementById('msg-erro');
const linkIrCadastro    = document.getElementById('link-ir-cadastro');

const formCadastro      = document.getElementById('form-cadastro');
const inputNome         = document.getElementById('input-nome');
const inputEmailCad     = document.getElementById('input-email-cadastro');
const inputSenhaCad     = document.getElementById('input-senha-cadastro');
const inputConfirmarSenha = document.getElementById('input-confirmar-senha');
const msgErroCadastro   = document.getElementById('msg-erro-cadastro');
const msgSucessoCadastro = document.getElementById('msg-sucesso-cadastro');
const linkIrLogin       = document.getElementById('link-ir-login');

const btnSair            = document.getElementById('btn-sair');
const btnInicio          = document.getElementById('btn-inicio');
const secoes             = document.querySelectorAll('.secao');
const linksNav           = document.querySelectorAll('[data-secao]');

const massaConfig        = document.getElementById('massa-config');
const generoSelector     = document.getElementById('genero-selector');
const frequenciaSelector = document.getElementById('frequencia-selector');
const divisaoInfo        = document.getElementById('divisao-info');


// Funções auxiliares
function mostrar(elemento) {
    elemento.classList.remove('escondido');
}

function esconder(elemento) {
    elemento.classList.add('escondido');
}

function esconderTodasAsTelas() {
    esconder(telaApresentacao);
    esconder(telaLogin);
    esconder(telaCadastro);
    esconder(app);
}


//  Botão Acessar o site
btnAcessar.addEventListener('click', function() {
    esconderTodasAsTelas();
    mostrar(telaLogin);
});


// Link Cadastre-se
linkIrCadastro.addEventListener('click', function(evento) {
    evento.preventDefault();
    esconderTodasAsTelas();
    mostrar(telaCadastro);
});


// Link Já tem conta? Entrar
linkIrLogin.addEventListener('click', function(evento) {
    evento.preventDefault();
    esconder(msgSucessoCadastro);
    esconderTodasAsTelas();
    mostrar(telaLogin);
});


// Formulário de cadastro
formCadastro.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome  = inputNome.value.trim();
    const email = inputEmailCad.value.trim();
    const senha = inputSenhaCad.value;
    const confirmacao = inputConfirmarSenha.value;

    // Verifica se as senhas coincidem
    if (senha !== confirmacao) {
        mostrar(msgErroCadastro);
        msgErroCadastro.textContent = 'As senhas não coincidem.';
        return;
    }

    // Pega os usuários já salvos no localStorage (ou array vazio se não houver)
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o e-mail já está cadastrado
    const emailJaExiste = usuarios.some(function(u) {
        return u.email === email;
    });

    if (emailJaExiste) {
        mostrar(msgErroCadastro);
        msgErroCadastro.textContent = 'Este e-mail já está cadastrado.';
        return;
    }

    // Salva o novo usuário
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostra sucesso e limpa o formulário
    esconder(msgErroCadastro);
    mostrar(msgSucessoCadastro);
    formCadastro.reset();
});


// Formulário de login
formLogin.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const emailDigitado = inputEmail.value.trim();
    const senhaDigitada = inputSenha.value;

    // Pega os usuários salvos no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procura um usuário com e-mail e senha corretos
    const usuarioEncontrado = usuarios.find(function(u) {
        return u.email === emailDigitado && u.senha === senhaDigitada;
    });

    if (usuarioEncontrado) {
        esconderTodasAsTelas();
        mostrar(app);
        esconder(msgErro);
        window.scrollTo(0, 0);
    } else {
        mostrar(msgErro);
    }
});


// Navegação entre abas
linksNav.forEach(function(link) {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();

        const secaoAlvo = this.getAttribute('data-secao');

        secoes.forEach(function(secao) {
            esconder(secao);
        });

        linksNav.forEach(function(l) {
            l.classList.remove('ativo');
        });

        mostrar(document.getElementById(secaoAlvo));
        this.classList.add('ativo');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// Treinos — dados e lógica
const dadosTreinos = {
    emagrecer: {
        label: ' Emagrecer',
        iniciante: [
            { nome: 'Caminhada Rápida', series: '5x por semana, 30 min', descricao: 'Ritmo moderado onde você consegue falar mas sente o esforço.' },
            { nome: 'Agachamento Livre', series: '3 séries × 15 rep', descricao: 'Pés na largura dos ombros, desça até 90°, joelhos não passam a ponta dos pés.' },
            { nome: 'Polichinelo', series: '3 séries × 30 rep', descricao: 'Cardio leve para ativar o metabolismo e queimar calorias.' },
            { nome: 'Prancha Abdominal', series: '3 séries × 30 segundos', descricao: 'Corpo reto do calcanhar à cabeça, abdômen contraído.' },
        ],
        intermediario: [
            { nome: 'Corrida Intervalada', series: '8 ciclos, 3x por semana', descricao: '1 min correndo forte + 1 min caminhando. Alternado.' },
            { nome: 'Burpee', series: '4 séries × 12 rep', descricao: 'Agacha, apoia as mãos, chuta as pernas, faz flexão, volta e salta.' },
            { nome: 'Afundo Alternado', series: '3 séries × 12 rep cada', descricao: 'Passo à frente, joelho traseiro quase no chão, alterna as pernas.' },
            { nome: 'Mountain Climber', series: '4 séries × 20 rep', descricao: 'Em posição de prancha, leve os joelhos ao peito alternadamente em ritmo rápido.' },
        ],
        avancado: [
            { nome: 'HIIT 20/10', series: '4 exercícios, 3x por semana', descricao: '20 seg de esforço máximo + 10 seg de descanso, 8 rodadas por exercício.' },
            { nome: 'Agachamento com Salto', series: '5 séries × 15 rep', descricao: 'Agacha fundo e explode para cima, amortece o pouso com controle.' },
            { nome: 'Flexão com Palma', series: '4 séries × 10 rep', descricao: 'Flexão explosiva onde as mãos saem do chão por um instante.' },
            { nome: 'Sprint de 100m', series: '8 repetições', descricao: 'Corrida na velocidade máxima. Recuperação completa entre cada sprint.' },
        ],
    },
    massa: {
        label:  'Ganhar Massa',
        iniciante: [
            { nome: 'Supino com Halteres', series: '3 séries × 12 rep', descricao: 'Deitado, empurra os halteres para cima em linha reta. Foco no peitoral.' },
            { nome: 'Agachamento com Barra', series: '3 séries × 10 rep', descricao: 'Barra nos trapézios, desça controlado até 90°, sobe expirando.' },
            { nome: 'Rosca Direta', series: '3 séries × 12 rep', descricao: 'Cotovelos fixos ao lado do corpo, sobe o halter até o ombro com controle.' },
            { nome: 'Remada Curvada', series: '3 séries × 12 rep', descricao: 'Torso inclinado a 45°, puxe a barra até o abdômen. Foco nas costas.' },
        ],
        intermediario: [
            { nome: 'Supino Inclinado', series: '4 séries × 10 rep', descricao: 'Banco a 45°, foca na parte superior do peitoral.' },
            { nome: 'Leg Press', series: '4 séries × 12 rep', descricao: 'Pés na plataforma na largura dos ombros, desça controlado sem travar os joelhos.' },
            { nome: 'Desenvolvimento Militar', series: '4 séries × 10 rep', descricao: 'Barra na frente, empurra acima da cabeça. Foco nos ombros.' },
            { nome: 'Puxada na Polia', series: '4 séries × 10 rep', descricao: 'Puxe a barra até o peito, cotovelos apontados para baixo e para trás.' },
        ],
        avancado: [
            { nome: 'Levantamento Terra', series: '5 séries × 5 rep', descricao: 'O exercício mais completo para força. Coluna neutra, quadril empurra para frente ao subir.' },
            { nome: 'Agachamento Profundo', series: '5 séries × 5 rep', descricao: 'Abaixo de 90°. Exige mobilidade de tornozelo e quadril. Use carga pesada.' },
            { nome: 'Barra Fixa com Peso', series: '4 séries × 6 rep', descricao: 'Barra fixa com colete ou halter preso aos pés para aumentar a resistência.' },
            { nome: 'Supino com Correntes', series: '5 séries × 5 rep', descricao: 'Correntes penduradas na barra aumentam a resistência conforme você sobe.' },
        ],
    },
    condicionamento: {
        label: ' Condicionamento',
        iniciante: [
            { nome: 'Caminhada + Corrida Leve', series: '3x por semana, 30 min', descricao: '5 min caminhando, 2 min correndo — alterne durante 30 minutos.' },
            { nome: 'Corda Pular', series: '5 séries × 1 min', descricao: 'Comece devagar e aumente o ritmo. Ótimo para coordenação e cardio.' },
            { nome: 'Bicicleta Estacionária', series: '20 min contínuos', descricao: 'Ritmo moderado constante. Respira pelo nariz, sente o esforço mas consegue conversar.' },
            { nome: 'Alongamento Dinâmico', series: '10 min ao final', descricao: 'Movimentos suaves circulares nos quadris, ombros e tornozelos após cada treino.' },
        ],
        intermediario: [
            { nome: 'Corrida de 5km', series: '3x por semana', descricao: 'Mantenha ritmo constante. Meta: completar os 5km sem parar.' },
            { nome: 'Circuito Funcional', series: '4 rodadas', descricao: 'Agacha + flexão + abdominal + polichinelo sem pausa. 1 min de descanso entre rodadas.' },
            { nome: 'Natação', series: '30 min, 2x por semana', descricao: 'Trabalha todo o corpo com baixo impacto. Ótimo para recuperação ativa.' },
            { nome: 'Corda Naval', series: '5 séries × 30 seg', descricao: 'Ondas alternadas com a corda. Exige ombros, core e cardio simultaneamente.' },
        ],
        avancado: [
            { nome: 'Corrida de 10km', series: '2x por semana', descricao: 'Mantenha ritmo de prova. Meta: completar abaixo de 55 minutos.' },
            { nome: 'Box Jump', series: '5 séries × 10 rep', descricao: 'Salto sobre caixa alta com explosão total das pernas. Desça controlado.' },
            { nome: 'Kettlebell Swing', series: '5 séries × 20 rep', descricao: 'Movimento de balanço com kettlebell. Cardio e força do posterior combinados.' },
            { nome: 'Circuito AMRAP', series: '20 minutos', descricao: 'Faça o máximo de rodadas possível: 10 burpees + 15 agachamentos + 10 flexões.' },
        ],
    },
};

let objetivoAtual = null;
let nivelAtual    = 'iniciante';
let generoAtual   = null;
let freqAtual     = null;

const objetivoSelector  = document.getElementById('objetivo-selector');
const treinosConteudo   = document.getElementById('treinos-conteudo');
const listaTreinos      = document.getElementById('lista-treinos');
const objetivoTexto     = document.getElementById('objetivo-selecionado');
const btnTrocarObjetivo = document.getElementById('btn-trocar-objetivo');
const btnNiveis         = document.querySelectorAll('.btn-nivel');

function renderizarTreinos() {
    const treinos = dadosTreinos[objetivoAtual][nivelAtual];
    listaTreinos.innerHTML = '';

    treinos.forEach(function(treino) {
        const card = document.createElement('div');
        card.className = 'card-treino';
        card.innerHTML = '<h3>' + treino.nome + '</h3>' +
                         '<p><strong>' + treino.series + '</strong></p>' +
                         '<p>' + treino.descricao + '</p>';
        listaTreinos.appendChild(card);
    });
}

function renderizarTreinosMassa() {
    const dias = dadosMassa[generoAtual][freqAtual][nivelAtual];
    listaTreinos.innerHTML = '';

    dias.forEach(function(dia) {
        const headerDia = document.createElement('div');
        headerDia.className = 'card-dia';
        headerDia.innerHTML = '<h3>' + dia.titulo + '</h3>';
        listaTreinos.appendChild(headerDia);

        dia.exercicios.forEach(function(ex) {
            const card = document.createElement('div');
            card.className = 'card-treino';
            card.innerHTML = '<h3>' + ex.nome + '</h3>' +
                             '<p><strong>' + ex.series + '</strong></p>' +
                             '<p>' + ex.descricao + '</p>';
            listaTreinos.appendChild(card);
        });
    });
}

document.querySelectorAll('.btn-objetivo').forEach(function(btn) {
    btn.addEventListener('click', function() {
        objetivoAtual = this.getAttribute('data-objetivo');
        nivelAtual = 'iniciante';

        if (objetivoAtual === 'massa') {
            esconder(objetivoSelector);
            generoAtual = null;
            freqAtual = null;
            mostrar(generoSelector);
            esconder(frequenciaSelector);
            mostrar(massaConfig);
            return;
        }

        objetivoTexto.textContent = 'Objetivo: ' + dadosTreinos[objetivoAtual].label;
        divisaoInfo.textContent = '';

        btnNiveis.forEach(function(b) { b.classList.remove('ativo'); });
        document.querySelector('[data-nivel="iniciante"]').classList.add('ativo');

        esconder(objetivoSelector);
        mostrar(treinosConteudo);
        renderizarTreinos();
    });
});

document.querySelectorAll('.btn-genero').forEach(function(btn) {
    btn.addEventListener('click', function() {
        generoAtual = this.getAttribute('data-genero');
        document.querySelectorAll('.btn-genero').forEach(function(b) { b.classList.remove('ativo'); });
        this.classList.add('ativo');
        esconder(generoSelector);
        mostrar(frequenciaSelector);
    });
});

document.querySelectorAll('.btn-frequencia').forEach(function(btn) {
    btn.addEventListener('click', function() {
        freqAtual = this.getAttribute('data-freq');
        nivelAtual = 'iniciante';

        objetivoTexto.textContent = 'Objetivo: Ganhar Massa';
        divisaoInfo.textContent = dadosMassa[generoAtual][freqAtual].divisaoNome;

        btnNiveis.forEach(function(b) { b.classList.remove('ativo'); });
        document.querySelector('[data-nivel="iniciante"]').classList.add('ativo');

        esconder(massaConfig);
        mostrar(treinosConteudo);
        renderizarTreinosMassa();
    });
});

document.getElementById('btn-voltar-objetivo-massa').addEventListener('click', function() {
    esconder(massaConfig);
    generoAtual = null;
    freqAtual = null;
    mostrar(generoSelector);
    esconder(frequenciaSelector);
    mostrar(objetivoSelector);
});

document.getElementById('btn-voltar-para-genero').addEventListener('click', function() {
    generoAtual = null;
    document.querySelectorAll('.btn-genero').forEach(function(b) { b.classList.remove('ativo'); });
    esconder(frequenciaSelector);
    mostrar(generoSelector);
});

btnNiveis.forEach(function(btn) {
    btn.addEventListener('click', function() {
        nivelAtual = this.getAttribute('data-nivel');
        btnNiveis.forEach(function(b) { b.classList.remove('ativo'); });
        this.classList.add('ativo');
        if (objetivoAtual === 'massa') {
            renderizarTreinosMassa();
        } else {
            renderizarTreinos();
        }
    });
});

btnTrocarObjetivo.addEventListener('click', function() {
    esconder(treinosConteudo);
    if (objetivoAtual === 'massa') {
        mostrar(generoSelector);
        esconder(frequenciaSelector);
        mostrar(massaConfig);
    } else {
        mostrar(objetivoSelector);
    }
});

// Alimentação — abas
const btnsAlim      = document.querySelectorAll('.btn-alim');
const conteudosAlim = document.querySelectorAll('.alim-conteudo');

btnsAlim.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const alvo = this.getAttribute('data-alim');

        conteudosAlim.forEach(function(c) { esconder(c); });
        btnsAlim.forEach(function(b) { b.classList.remove('ativo'); });

        mostrar(document.getElementById('alim-' + alvo));
        this.classList.add('ativo');
    });
});


// Botão LiraBot
document.getElementById('btn-acessar-bot').addEventListener('click', function() {
    const url = document.getElementById('input-link-bot').value.trim();
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('Cole o link do LiraBot antes de acessar.');
    }
});


// Botão "← Início"
btnInicio.addEventListener('click', function() {
    esconderTodasAsTelas();
    mostrar(telaApresentacao);
});


// Menu hamburguer
const navbar       = document.getElementById('navbar');
const btnHamburger = document.getElementById('btn-hamburger');
const btnSairMobile = document.getElementById('btn-sair-mobile');

btnHamburger.addEventListener('click', function() {
    navbar.classList.toggle('menu-aberto');
});

function fecharMenuMobile() {
    navbar.classList.remove('menu-aberto');
}

linksNav.forEach(function(link) {
    link.addEventListener('click', fecharMenuMobile);
});

btnSairMobile.addEventListener('click', function() {
    fecharMenuMobile();
    esconderTodasAsTelas();
    mostrar(telaLogin);
    formLogin.reset();
    esconder(msgErro);
});


// Botão "Sair"
btnSair.addEventListener('click', function() {
    esconderTodasAsTelas();
    mostrar(telaLogin);
    formLogin.reset();
    esconder(msgErro);
});


// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.classList.remove('escondido');
    } else {
        btnTopo.classList.add('escondido');
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
