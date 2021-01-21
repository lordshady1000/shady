/*var numbers=[1,2,3,4,5,6];
numbers.reverse()
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); 
}

IF ELSE STATEMENT

var var1= 1;
var var2= 2;
if (var1!=var2 || var1==1) {
  console.log('boom'); 
} else {
    alert('incorrect') ;
}

SWITCH

var fruits=('apples');

switch(fruits){
    case "apples":
        alert('i love apples');
        break;
    case "banana":
        alert('nothingh')
        break;
    default:
        alert('all')
        break;
}

OBJECT ARRAYS

var users=[
    {
        name: 'john',
        age: 20,
    },
    {
        name: 'mark',
        age: 20,
    }
];
alert(users[1].age);

function doclick(){
    alert('you clicked');
};*/

// creat an element

let newDiv = document.createElement('div');
newDiv.className = 'newDiv';

let newText = document.createTextNode('hello world');
newDiv.appendChild(newText);

/*let shady = document.querySelector('aside');
let go = document.querySelector('aside label');

shady.insertBefore(newDiv, go);*/


let firstName = document.querySelector('#firstName');
let email = document.querySelector('#email');
let btn = document.querySelector('.btn');
let myForm = document.querySelector('#form');
let msg = document.querySelector('.msg');
let list = document.querySelector('.list');
let section = document.querySelector('#istSection');
    
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){

    if (firstName.value == "") {
        firstName.style.borderBottom = '3px solid red';
        setTimeout(function(){
            firstName.style.borderBottom = '3px solid white'
        }, 3000);
    }

    if (email.value == "") {
        email.style.borderBottom = '3px solid red';
        setTimeout(function(){
            email.style.borderBottom = '3px solid white'
        }, 3000);
    }
    

    if(firstName.value == "" || email.value == "") {
        e.preventDefault();
        
        msg.style.display = 'block'

        setTimeout(function(){
            msg.style.display = 'none' }, 3000);

        section.style.height = '250px';
        setTimeout(function(){section.style.height = '220px'}, 3000);

        /* msg.classList.add('error');
        msg.innerHTML='pls input all fields';

        setTimeout(()=>msg.remove(), 3000);*/
    } else {
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${firstName.value} : ${email.value}`));
        list.appendChild(li);

        firstName.value='';
        email.value='';
    }
}

/*function validateForm(){
let firstName = document.querySelector('#firstName').value
let email = document.querySelector('#email').value

if (firstName== "") {
    alert('jhdjhjed')
    return false
} else {
    console.log('succes');
}

}*/



function changebackground(x){ 
    var body= document.getElementById('body');
    body.style.backgroundColor = x.value;

    if (body.style.backgroundColor == 'black') {
        $('#body').css('color', 'white');
    }else{
        body.style.color = 'black';
    }
};

/*let dog = document.querySelector('.dog');

body.addEventListener('mousemove', runEvent);

function runEvent(e){
   body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 50)";
}*/

let java = $('.java');
let javaLenght = java.length;

$('.java').click(function(){

        let buttonHtml = this.innerHTML;

        makeSound(buttonHtml);
        
    });
    

document.addEventListener('keypress', function(event){
    makeSound(event.key)

});

function makeSound(key){

    if (key == 'S') {   
        var sound1 = new Audio('sound/scar.mp3')
        sound1.play();
        }
    if (key == 'H') {
            var sound2 = new Audio('sound/sonic.mp3');
        sound2.play();
}
    
}

