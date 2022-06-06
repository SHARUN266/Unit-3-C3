let userData=JSON.parse(localStorage.getItem('user'))
//console.log(userData)


document.querySelector('#wallet_balance').innerHTML=userData.wallet



big=document.querySelector('#voucher_list')

async function voucherlist(){

    try{
        let url='https://masai-vouchers-api.herokuapp.com/api/vouchers';
       let res=await fetch(url)
       let data= await res.json()
       console.log(data)
       append(data[0].vouchers)
    }catch(err){
        console.log(err)
    }

}
voucherlist()

function append(data){
    data.forEach((el) => {
        let box=document.createElement('div')
        box.setAttribute('class','voucher')
        let img=document.createElement('img')
        img.src=el.image
        let name=document.createElement('h3')
        name.innerHTML=el.name;
        let price=document.createElement('h2')
        price.innerHTML=el.price
        let buy=document.createElement('button')
        buy.innerHTML='Buy';
        buy.setAttribute('class','buy_voucher')
        buy.addEventListener('click',function(){
           BuyVoucher(el.image,el.name,el.price)
        })

        box.append(img,name,price,buy)
        big.append(box)
        
    });
}
var arr=[]
var sum=userData.wallet
function BuyVoucher(image,name,price){
    event.preventDefault()
    let Vdata={
        img:image,
        name:name,
        price:price
    }

    arr.push(Vdata)
    console.log(arr)

   

    localStorage.setItem('purchase',JSON.stringify(arr))
   
  
   

    if(sum>=Vdata.price){
        alert('Hurray! purchase successful')
       sum=sum-Vdata.price
        document.querySelector('#wallet_balance').innerHTML=sum;
       
       
       
       
    }
    else{
        alert('Sorry! insufficient balance')
    }
  
  

    

}