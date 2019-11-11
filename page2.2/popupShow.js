$(document).ready(function () {
    $('input:checkbox').click(function () {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

function refresh() {
    document.getElementById('bgWrong').className = 'none';
}

function check(trueChoise) {
    let choise1 = document.getElementById('choise1');
    let choise2 = document.getElementById('choise2');

    if(trueChoise == 1){
        if (choise1.checked) {
            document.getElementById('bgCorrect').className = 'background';
        } else {
            document.getElementById('bgWrong').className = 'background';
        }
    }
    else{
        if (choise2.checked) {
            document.getElementById('bgCorrect').className = 'background';
        } else {
            document.getElementById('bgWrong').className = 'background';
        }
    }
}

function choise(){
    $('input:checkbox').not(this).prop('checked', false);
}

