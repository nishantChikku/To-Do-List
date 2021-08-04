let input = document.querySelector("#add");
let  btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
btn.onclick = function(){

    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }

};

//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};
