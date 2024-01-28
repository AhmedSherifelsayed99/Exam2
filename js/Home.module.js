// import { Ui } from "./Ui.module.js"
export class Home{
    constructor(){

    document.getElementById('categories').addEventListener('click',async()=>{
           const categories= await this.getGategories()
           document.querySelector('#mainCategory').classList.remove('d-none')
           document.querySelector('#mainArea').classList.add('d-none')
           document.querySelector('#mainIngredients').classList.add('d-none')
           document.querySelector('#contact-us').classList.add('d-none')
          
            
    })
    document.getElementById('area').addEventListener('click',async()=>{
         const area = await this.getArea()
         document.querySelector('#mainArea').classList.remove('d-none')
         document.querySelector('#mainCategory').classList.add('d-none')
         document.querySelector('#mainIngredients').classList.add('d-none')
         document.querySelector('#contact-us').classList.add('d-none')
         
    })
    document.getElementById('ingredients').addEventListener('click',async ()=>{
        const ingredients = await this.getIngredients()
        document.querySelector('#mainIngredients').classList.remove('d-none')
        document.querySelector('#mainCategory').classList.add('d-none')
        document.querySelector('#mainArea').classList.add('d-none')
        document.querySelector('#contact-us').classList.add('d-none')

    })     

    document.getElementById('contact').addEventListener('click',()=>{
      this.displayForm();
      document.querySelector('#mainIngredients').classList.add('d-none')
      document.querySelector('#mainCategory').classList.add('d-none')
      document.querySelector('#mainArea').classList.add('d-none')
    })
        
    }

    async getGategories(){
      let data=[];
       let api= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/images/media/meals/llcbn01574260722.jpg/preview`)
       let response= await api.json()
       data=response.categories
      //  console.log(arr);
       console.log(data);
       this.displayData(data); 
    }

displayData(data){
  let categoryBox=``
  for(let i=0; i<data.length ; i++){
    categoryBox+=`    
      <div class="col-md-3">   
      <div class="meal">     
      <img src="${data[i].strCategoryThumb}" class="w-100">
      <div class="meal-layer w-100 h-100 overflow-hidden"> 
      <h3>${data[i].strCategory}</h3>
      <p>${data[i].strCategoryDescription}</p>
      </div>
      </div>
      </div>
    `
    document.getElementById('mainCategory').innerHTML=categoryBox;
  }

}




    async getArea(){
      let area=[];
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let finalResponse=await api.json();
        area=finalResponse.meals
        console.log(area);
        this.displayArea(area)
    }



    displayArea(area){
        let cartona=``
        for(let i=0; i<area.length; i++){
          cartona+=`  
          
          <div class="col-md-3">
          <div class="text-white text-center country p-3">
          <i class="fa-solid  fa-home fs-1  fa-2x"></i>
          <h3 class="text-white">${area[i].strArea}</h3>
          </div>
          </div>
      
          `
          document.querySelector('#mainArea').innerHTML=cartona;
        }
    }

     async getIngredients(){
        let x=[];
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let responseIngr=await api.json()
        x=responseIngr.meals
        console.log(x);
        this.displayIngredients(x)
     }


     displayIngredients(x){
     let box=``
     for(let i=0; i<15;i++){
      box+=`
          
      <div class="col-md-4">
              <div class="ingr text-center overflow-hidden text-white">
                <i class="fa-solid  fa-drumstick-bite fs-1  fa-2x text-center"></i>
                <h5>${x[i].strIngredient}</h5>
                <p>${x[i].strDescription}</p>
              </div>

            </div>
           
      
      
      `
      document.querySelector('#mainIngredients').innerHTML=box
     }
     }

     displayForm(){
      
        document.querySelector('#contact-us').classList.remove('d-none')
      
     }


     async getSearchData(){
      let search=[];
      let api= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      let searchResponse =await api.json;
      console.log(searchResponse)
      search=searchResponse


     }
     

    }
   