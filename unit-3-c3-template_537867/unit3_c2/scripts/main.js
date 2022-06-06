
  function getUser(){
   
   let userData={
     name:document.querySelector("#name").value,
     email:document.querySelector("#email").value,
     address:document.querySelector('#address').value,
     wallet:document.querySelector('#amount').value
   }

   localStorage.setItem('user',JSON.stringify(userData))

   console.log(userData)
  }
