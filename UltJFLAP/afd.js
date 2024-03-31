const afd = {
    estados: ['q0', 'q1', 'q2'],
    alfabeto: ['0', '1'],
    estadoInicial: 'q0',
    estadosFinais: ['q2'],
    transicoes: {
      q0: { '0': 'q1', '1': 'q0' },
      q1: { '0': 'q2', '1': 'q0' },
      q2: { '0': 'q2', '1': 'q2' },
    },
  };
  
  function verificar() {
    const entrada = document.getElementById('input').value;
    let estadoAtual = afd.estadoInicial;
  
    for (let simbolo of entrada) {
      if (!afd.alfabeto.includes(simbolo)) {
        document.getElementById('resultado').innerText = 'Entrada inválida!';
        return;
      }
      estadoAtual = afd.transicoes[estadoAtual][simbolo];
    }
  
    const aceita = afd.estadosFinais.includes(estadoAtual);
    const mensagem = aceita ? 'Entrada aceita!' : 'Entrada rejeitada!';
    document.getElementById('resultado').innerText = mensagem;
  }
  