const input = document.querySelector('#input');
const headingText = document.querySelector('#text');

input.addEventListener('keyup',function(event){
    const text = event.target.value;
    // console.log('text:',text);
    headingText.innerText = text;
    if (text == 'delete') {
        console.log('delete typed');

    }
  
});