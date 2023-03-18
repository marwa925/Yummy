import { Details } from "./Details.module.js";
export class Category{
    constructor(){
        
        this.getData();
    }
    async getData(){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let result= await api.json();
        // console.log(result);
        this.display(result.categories);
    }
    display(data){
        let temp=``;
        for(let i=0; i<data.length; i++){
            temp +=`<div class="col-md-3">
            <div class="inner rounded position-relative overflow-hidden" id="${data[i].strCategory}">
                <div>
                    <img src="${data[i].strCategoryThumb}" class="w-100 rounded" alt="">
                </div>
                
                <div class="layer rounded p-2 flex-column">
                    <h2>${data[i].strCategory}</h2>
                    <p class="text-center">${data[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            </div>
            
        </div>`
        }
        document.getElementById("categR").innerHTML=temp;

        const inner= Array.from(document.getElementsByClassName("inner"));
        
        inner.forEach((el)=>{
            el.addEventListener("click",()=>{
                let id=el.getAttribute("id") ;
                $(".made").not(".categDet").css("display","none");
                $(".categDet").css("display","block");
                this.getDetails(id);
            })
        })
    }

    async getDetails(categ){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`);
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
        document.getElementById("categDetRow").innerHTML=temp;
        new Details();
    }



}