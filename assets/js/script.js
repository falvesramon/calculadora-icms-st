var calc = document.querySelector('#btn-calc');
var result = document.querySelector('.resultado');

calc.addEventListener('click', calcular);

function calcular() {
    var valorProduto = parseFloat(document.querySelector('.valor-prod').value);
    var frete = parseFloat(document.querySelector('.valor-frete').value);
    var seguro = parseFloat(document.querySelector('.valor-seg').value);
    var despesas = parseFloat(document.querySelector('.valor-frete').value);
    var descontos = parseFloat(document.querySelector('.descontos').value);
    var ipi = parseFloat(document.querySelector('.ipi').value);
    var icmsInter = parseFloat(document.querySelector('.icms-inter').value);
    var icmsIntra = parseFloat(document.querySelector('.icms-intra').value);
    var mva = parseFloat(document.querySelector('.mva').value);

    var baseIcmsInter = (valorProduto + frete + seguro + despesas) - descontos;
    var valorIcmsInter = (baseIcmsInter * (icmsInter / 100));
    var baseIcmsST = ((valorProduto + ipi + despesas + seguro + frete) - descontos) * (1 + (mva / 100));
    var valorIcmsST = (baseIcmsST * (icmsIntra / 100)) - valorIcmsInter;

    result.innerText = valorIcmsST.toFixed(2); // Adicionando toFixed para limitar as casas decimais
    result.style.color = '#F2AFEF'; //Ao clicar no botão, a cor do resultado será alterada
}

