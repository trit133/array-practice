let check = true;

let mic = 'loud';
let balls = 200;
let myArr = [mic,balls];

myArr.push('apple');

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

console.log('now we iterate through the array');
for (let i = myArr.length - 1; i >= 0; i -= 1){
    
    const addButton = document.getElementById('addopt');
    const removeButton = document.getElementById('removeopt');
    const checkButton = document.getElementById('checkbtn');
    const textElement = document.getElementById('textcontainer');
    textElement.innerHTML = myArr;

    addButton.onclick = function(){
        myArr.push('pear');
        console.log('u pushed a pear')
        console.log(myArr);
        textElement.innerHTML = myArr;
    }
    removeButton.onclick = function(){
        myArr.pop();
        console.log(myArr);
        textElement.innerHTML = myArr;
    }

    checkButton.onclick = function(){
        if (myArr.length < 5){
            console.log('there are less then 5 numbers in the array');
            window.alert('there are less then 5 numbers in the array');
            
            }
            else if(myArr.length > 5) {
                console.log ('there are more then 5 numbers in array');
                window.alert('there are more then 5 numbers in the array');
                
            }
    }
}
 console.log(myArr);

