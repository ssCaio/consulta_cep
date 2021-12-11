const consulta = document.querySelector(".verificarBtn");
const cepNumber = document.querySelector(".cepNumber");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

consulta.addEventListener("click", () => {
  const numeroCep = cepNumber.value.replace(/[^0-9]/g, "");
  console.log(numeroCep);
  fetch(`https://viacep.com.br/ws/${numeroCep}/json/`)
    .then((r) => r.json())
    .then((cep) => {
      logradouro.value = cep.logradouro;
      bairro.value = cep.bairro;
      cidade.value = cep.localidade;
      estado.value = cep.uf;
      console.log(cep);
    });
});
