function display(val){
    document.querySelector("#textval").value += val;
}

function calculate(){
    let x = document.querySelector("#textval").value;
    y = eval(x);
    document.querySelector("#textval").value = y;
}

function clr(){
    document.querySelector("#textval").value = '';
}

