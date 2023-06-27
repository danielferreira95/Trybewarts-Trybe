const botao = document.querySelector('button[type="submit"]');
const entradaEmail = document.getElementById('email');
const entradaSenha = document.getElementById('senha');

const valida = () => {
  if (entradaEmail.value === 'tryber@teste.com' || entradaSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
botao.addEventListener('click', valida);
