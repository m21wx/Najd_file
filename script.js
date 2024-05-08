
	let iconLogo = document.querySelector('.iconLogo')
	let lank = document.querySelector('.lank')
	let ul = document.querySelectorAll('.lank ul li');

	iconLogo.onclick=()=>{
		lank.classList.toggle('actaveToggle')
	}

		
		
	ul.forEach(e=>{
		
		e.addEventListener('click',()=>{
					
			ul.forEach(e=>{
				e.classList.remove('active')
			})
		
			e.classList.add('active')
		})
		
	})
		
	
	
	// project
	/* 
						<div class='githubID '>  
		<div class='projectAPI'><span>${index++} </span> <span> ${arr[i].name}</span>  <span> <a href="https://m21wx.github.io/${arr[i].name}" target="_blank"> الرابط</a> </span> </div>
							<div  class='dateTime'> <span> ${arr[i].updated_at.slice(0,10)} || ${arr[i].updated_at.slice(11,arr[i].updated_at.length - 1)}</span> </div>
					   </div>

	*/
	let tableBodyProgect = document.querySelector('.tableBodyProgect')
		
		
				let xhttp = new XMLHttpRequest() 
		 
		 xhttp.addEventListener('readystatechange',function(){
			 
				if(this.readyState ==4 && this.status ==200){
					let arr = JSON.parse(this.responseText);
					let index = 1;
					for(let i =0; i < arr.length; i++){
					let tr = `
							<td>${arr[i].name} </td>
							<td>${arr[i].updated_at.slice(0,10)} || ${arr[i].updated_at.slice(11,arr[i].updated_at.length - 1)} </td>
							<td><a href="https://m21wx.github.io/${arr[i].name}" target="_blank"> الرابط</a> </td>
							<td> ${index++}</td>
					`;	
					tableBodyProgect.innerHTML += tr
					}
			
				}
		 })
		 
		 xhttp.open('GET','https://api.github.com/users/m21wx/repos',true)
		 xhttp.send()
		 
		
		
		
		
		
		
		let about = document.querySelector('.about');
		let scrollTop = document.querySelector('.scrollTop');
		let i = scrollTop.firstElementChild
	
		window.onscroll=(e =>{
			if(window.scrollY >= about.offsetTop){
				scrollTop.style.display='block'
			}else{
				scrollTop.style.display='none';
			}
		})
		
		
		
		
		//behavior:'smooth',
		i.onclick =(e=>{
	
		window.scrollTo({
			top:0,
			behavior:'smooth',
		})
		})
		
		
		
		
		
		