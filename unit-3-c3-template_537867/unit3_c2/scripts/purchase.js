let v=JSON.parse(localStorage.getItem('purchase'))
console.log(v)
let big=document.querySelector('#purchased_vouchers')
data(v)
let wallet=JSON.parse(localStorage.getItem('user'))
document.querySelector('#wallet_balance').innerHTML=wallet.wallet
function data(d){

   d.forEach((el)=>{
        let box=document.createElement('div')
    let i=document.createElement('img')
    i.src=el.img;
    let n=document.createElement('h3')
    n.innerHTML=el.name;
    let p=document.createElement('h3')
    p.innerHTML=el.price
    box.append(i,n,p)

    big.append(box)

   })
   


}