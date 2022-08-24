
class Sub{
	constructor(amount,price,btn){
		this.amount=amount;
		this.price=price;
		this.am=document.createElement("div");
	}
	init(){
		this.am.innerHTML=0

	}
	sub(el){
		let btn =document.createElement(el);
		btn.innerHTML='add'
		btn.addEventListener('click', function(){
			let r=0
			r=r-1
			console.log(this.am);
		})
		// btn.innerHTML+=this.amount
		console.log(this.amount);
		document.body.appendChild(btn)
		document.body.appendChild(this.am)
	}
	plus(btn){
		// let btn=document.querySelector('btn')
		this.amount++
		console.log(this.amount);
		this.am.innerHTML=this.amount
	}
	
}
let sub =new Sub(2,1)
sub.init()
sub.sub('div')