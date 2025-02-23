const change= document.querySelector('#change');


change.addEventListener('click',function(){
    const name = document.querySelector('#name').value;
    const user = document.querySelector('#user');
    user.innerText = name;
})