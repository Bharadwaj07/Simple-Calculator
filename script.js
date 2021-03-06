function getHistory(){
    return document.getElementById('history-value').innerText;
}
//alert(getHistory())
function printHistory(num){
    document.getElementById('history-value').innerText =num;
}
//printHistory("99*9-3")
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){

    if(num ==""){
        document.getElementById('output-value').innerText= num;
    }
    else{
        document.getElementById('output-value').innerText=getFormatedNumber(num);
    }
   
}
function getFormatedNumber(num){
    if(num =="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en")
    return value ;
}
//printOutput("2345678")
function reverseNum(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNum(getOutput()));
var operator = document.getElementsByClassName('operator');
for(var i =0; i< operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id =="clear"){
            printHistory("");
            printOutput("");
        }

        else if(this.id == "backspace"){
            var output = reverseNum(getOutput()).toString();
            output =output.substr(0,output.length-1);
            printOutput(output);
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output ==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output != "" ||history != ""){
                output =output==""?
                output: reverseNum(output);
                history =history+output;
              //  printHistory(history);
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history =history +this.id;
                    printHistory(history);
                    printOutput("");
                }

            }
        }
    });
}
var number = document.getElementsByClassName('number');
for(var i =0; i< number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNum(getOutput());
        if(output !=NaN){
            output = output +this.id;
            printOutput(output);
            //printHistory(output);
        }
    });
}
