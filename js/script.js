  
   window.addEventListener("load", function(){
   	  document.querySelector(".preloader").classList.add("opacity-0");

   	  setTimeout(function(){
         document.querySelector(".preloader").style.display="none";
   	  },1000)
   })

  // Portfolio Item Filter

  const filterContainer=document.querySelector(".portfolio-filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem=portfolioItems.length;
 
        for(let i=0; i<totalFilterBtn; i++){
        	filterBtns[i].addEventListener("click", function(){
        		filterContainer.querySelector(".active").classList.remove("active");
        		this.classList.add("active");

                const filterValue=this.getAttribute("data-filter");
                for(let k=0; k<totalPortfolioItem; k++){
                	if(filterValue === portfolioItems[k].getAttribute("data-category")){
                		portfolioItems[k].classList.remove("hide");	
                		portfolioItems[k].classList.add("show");
                	}
                	else{
                		portfolioItems[k].classList.remove("show");
                	    portfolioItems[k].classList.add("hide");	
                	}
                	if(filterValue === "all"){
                	    portfolioItems[k].classList.remove("hide");	
                		portfolioItems[k].classList.add("show");	
                	}
                }

        	})
        }




 // Aside Navbar
    const nav=document.querySelector(".nav"),
          navList=nav.querySelectorAll("li"),
          totalNavList=navList.length,
          allSection=document.querySelectorAll(".section"),
          totalSection=allSection.length;

   for(let i=0; i<totalNavList; i++){
   	  const a=navList[i].querySelector("a");
   	   a.addEventListener("click", function(){
   	   	    // remove back section Class
   	   	    removeBackSectionClass();

          for(let j=0; j<totalNavList; j++){
          	if(navList[j].querySelector("a").classList.contains("active")){
          		// add back section Class
          		addBackSectionClass(j)
          		
          	}
          	navList[j].querySelector("a").classList.remove("active");

          }

   	   	this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
           asideSectionTogglerBtn();    	
        }

   	   })
   }
   
   function removeBackSectionClass(){
   	for(let i=0; i<totalSection; i++){
   	     	 allSection[i].classList.remove("back-section");
   	        }
   }
   function addBackSectionClass(num){
      allSection[num].classList.add("back-section");
   }
   function showSection(element){
   	     for(let i=0; i<totalSection; i++){
   	     	 allSection[i].classList.remove("active");
   	     }
        const target=element.getAttribute("href").split("#")[1];
      document.querySelector("#"+target).classList.add("active")         
         
   }
  
   function updateNav(element){
   	  for(let i=0; i<totalNavList; i++){
         navList[i].querySelector("a").classList.remove("active");   	  	
         const target=element.getAttribute("href").split("#")[1];
         if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
         	navList[i].querySelector("a").classList.add("active");
         }
   	  }
       
   }


   document.querySelector(".hire-me").addEventListener("click",function(){
   	 const sectionIndex=this.getAttribute("data-section-index");
   	 // console.log(sectionIndex)
   	 showSection(this);
   	 updateNav(this);
   	 removeBackSectionClass();
   	 addBackSectionClass(sectionIndex);

   })

    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
    
    function asideSectionTogglerBtn(){
       aside.classList.toggle("open");    	
       navTogglerBtn.classList.toggle("open");
       for(let i=0; i<totalSection; i++){
   	     	 allSection[i].classList.toggle("open");
   	     }
    }


    // copyright updated year

    let currentYear =new Date().getFullYear();
    document.querySelector('.year').innerHTML = currentYear;


    const timeline = gsap.timeline({defaults :{duration: 1}});

timeline
        .from('.nav a',{x: '-150%', stagger: .3, ease: 'power2in'})
        .from('.social-links a', {opacity: 0, stagger: .3}, 2)


 window.onload = function(){   
  //Rotator Start
  let text = document.getElementById('rotator');
  let word = text.getElementsByTagName('span');
  console.log(word);
  let i = 0;
  const rotator = () => {
      word[i].style.display = 'none';
      console.log(word[i])

      i =(i + 1) % word.length; 
      word[i].style.display = 'initial';
  }
  setInterval(rotator, 2000);
 // Rotator End
}







