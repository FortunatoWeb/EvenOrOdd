function calcEven(){
    cleanAllAlertBoxes();
    let num1 = document.getElementById("numberGamer1").value;
    let num2 = document.getElementById("numberGamer2").value;
    let nameGamer1 = document.getElementById("nameGamer1").value;
    let nameGamer2 = document.getElementById("nameGamer2").value;
    let chosenGamer1 = document.getElementById("chosenGamer1").value;
    let chosenGamer2 = document.getElementById("chosenGamer2").value;

    if(nameGamer1 == "" || nameGamer2 == ""){
        showAlert("Escolha os nomes para ambos jogadores!", "danger");
        return;
    }

    if(chosenGamer1 == "" || chosenGamer2 == ""){
        showAlert("Escolha (par ou ímpar) para ambos jogadores!", "danger");
        return;
    }

    if(num1 == "" || num2 == ""){
        showAlert("Informe os valores para os jogadores 1 e 2!", "danger");
        return;
    }

    if(num1 > 5 || num1 < 0 || num2 > 5 || num2 < 0){
        showAlert("Valor não permitido! Informe números de 0 a 5.", "danger", "result");
        showAlert("A ideia é que o jogo seja como praticado presencialmente, em que usa-se os dedos de apenas uma das mãos. O motivo de usar apenas uma das mãos (no máximo 5 dedos) é imparcialidade. Pois quando o jogo é jogado com um intervalo que contém números ímpares, por exemplo, no intervalo de 0 a 10, há 11 números possíveis. Isso pode levar a uma injustiça matemática, pois, em um jogo de chances igualitárias, o número de opções deve ser par para que ambos os jogadores tenham uma probabilidade exata de 50% de ganhar.", "info");
        return;
    }

    let sum = parseInt(num1) + parseInt(num2);

    console.log("\n");
    console.log(nameGamer1 + " = " + num1);
    console.log(nameGamer2 + " = " + num2);
    console.log("Soma = " + sum);

    if(isEven(sum) == chosenGamer1){
        console.log("Resultado = par");
        showAlert("Vencedor(a):\n " + nameGamer1, "primary", "result");
        console.log("Vencedor(a): " + nameGamer1)
        return;
    }
    console.log("Resultado = impar");
    showAlert("Vencedor(a):\n " + nameGamer2, "primary", "result");
    console.log("Vencedor(a): " + nameGamer2)
    return;
}

function isEven(number){
    return number % 2 === 0;
}

function showAlert(text = "", type = "info", box = "alert"){
    document.getElementById(`box-${box}`).removeAttribute("class");
    document.getElementById(`box-${box}`).classList.add("col-md-12", "alert", "alert-info", `alert-${type}`);
    document.getElementById(`value-${box}`).innerHTML = text;
}

function cleanAllAlertBoxes(){
    document.getElementById("box-result").classList.add("d-none");
    document.getElementById("box-alert").classList.add("d-none");
}

function changeChosenSelect(){
    window.addEventListener("DOMContentLoaded", function() {
        var chosenGamer1 = document.getElementById("chosenGamer1");
        var chosenGamer2 = document.getElementById("chosenGamer2");
        chosenGamer1.addEventListener("change", function(){
            chosenGamer2.value = Number(!Number(chosenGamer1.value));
        });
        chosenGamer2.addEventListener("change", function(){
            chosenGamer1.value = Number(!Number(chosenGamer2.value));
        });
    });
}

function evenOdd(){
    calcEven();
}

changeChosenSelect();