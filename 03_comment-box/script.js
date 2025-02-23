const btn = document.querySelector('#submit');

btn.addEventListener('click',function(){
    const commentElement = document.querySelector('#comment');
    const comment = commentElement.value;
    const comments = document.querySelector('#comments');

    const p = document.createElement('p');
    p.innerText = comment;
    p.classList.add('comment-text');
    comments.appendChild(p);

   commentElement.value = ' ';
});