function AdditionData() {
    var A = document.getElementById("first").value;
    var B = document.getElementById("second").value;
    var C = document.getElementById("third").value;
    A=Number(A)
    B=Number(B)
    C=Number(C)
    let op1 = document.getElementById("operator1").value
    let op2 = document.getElementById("operator2").value
    let D
    let E
    if (op1 == '+') {
        D = A + B
    }
    else if (op1 == '-') {
        D = A - B
    }
    else if (op1 == '*') {
        D = A * B
    }
    else if (op1 == '/'){
        D = A / B
    }
    else {
        document.writeln("Invlid value");
    }
    
    if(op2 == '+'){
        E = D + C
    }
    else if(op2 == '-'){
        E = D - C
    }
    else if(op2 == '*'){
        E = D * C
    }
    else if(op2 == '/'){
         E = D / C
    }
     else {
        document.writeln("Invlid value");
    }

   // var sum = Number(A) + Number(B) + Number(C);

    document.getElementById("resultTextId").style.display = 'block';
    document.getElementById("result").innerHTML = E;
    document.getElementById("operator1").style.display ='op1';
    document.getElementById("operator2").style.display ='op2';
}
function ClearData() {
    document.getElementById("first").value = ''
    document.getElementById("second").value = ''
    document.getElementById("third").value = ''


    document.getElementById("resultTextId").style.display = 'none'
    document.getElementById("result").innerHTML = ''

}
