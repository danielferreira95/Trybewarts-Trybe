const botao = document.querySelector('button[type="submit"]');
const entradaEmail = document.getElementById('email');
const entradaSenha = document.getElementById('senha');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

const valida = () => {
  if (entradaEmail.value === 'tryber@teste.com' || entradaSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const verificaCheck = () => {
  console.log(agreement.checked);
  if (agreement.checked) {
    submit.removeAttribute('disabled');
  } else { submit.setAttribute('disabled', true); }
};

botao.addEventListener('click', valida);
agreement.addEventListener('change', verificaCheck);
