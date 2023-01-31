let email = document.querySelector('.email_input')
let password = document.querySelector('.p_input')
let click_button= document.querySelector('.click_button')

click_button.addEventListener('click', function(){
   if(password.type === 'text'){
    password.setAttribute('type','password')
   }else{
    password.setAttribute('type','text')
   }
   
})
