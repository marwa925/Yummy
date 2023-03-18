import { Details } from "./Details.module.js";
export class Ingredient{
    constructor(){
        this.getData()
    }
    async getData(){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let response= await api.json();
        console.log(response.meals);
        this.display(response.meals);
    }
    display(data){
        let temp=``;
        for(let i=0; i<20; i++){
            if(data[i].strDescription != null){
                temp+=`<div class="col-md-3 text-center">
            <div class="inner" id="${data[i].strIngredient}">
                <p><i class="fa-solid fa-drumstick-bite fa-4x text-light"></i></p>
                <h3>${data[i].strIngredient}</h3>
                <p>${data[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
            </div>
        </div>`
            }
            
            
        }
        document.getElementById("ingredR").innerHTML=temp;

        const inner= Array.from(document.getElementsByClassName("inner"));
        
        inner.forEach((el)=>{
            el.addEventListener("click",()=>{
                let id=el.getAttribute("id") ;
                $(".made").not(".ingredientDet").css("display","none");
                $(".ingredientDet").css("display","block");
                this.getDetails(id);
            })
        })
    }
    async getDetails(ingred){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
        let result= await api.json();
        // console.log(result);
        this.displayDetails(result.meals);
    }
    displayDetails(data){
        let temp=``;
        for(let i=0; i<data.length ; i++){
            temp+=`<div class="col-md-3">
            <div class="inner rounded position-relative overflow-hidden" id="${data[i].idMeal}">
                <div>
                    <img src="${data[i].strMealThumb}" class="w-100 rounded" alt="">
                </div>
                
                <div class="layer rounded p-2 ">
                    <h2>${data[i].strMeal}</h2>
                </div>
            </div>
            
        </div>`
        }
        document.getElementById("ingredDetR").innerHTML=temp;
        new Details();
    }
}