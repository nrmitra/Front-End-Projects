var button = document.getElementById('calculate').addEventListener('click',buttonClick);


function buttonClick(){
    console.log('Button Clicked');
    var bill_amt = document.getElementById('amount').value
    var tip_percentage = document.getElementById('tip').value
    var output = Math.round(bill_amt * (1-(tip_percentage/100)))
    console.log(Math.round(bill_amt * (1-(tip_percentage/100))))

    document.getElementById('output').innerHTML = output

}
