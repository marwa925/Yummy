import { Details } from "./Details.module.js";
export class Home{
    constructor(){
        this.getData();
    }

    async getData(){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        let responce= await api.json();
        console.log(responce.meals);
        this.display(responce.meals);
    }
    display(data){
        let temp="";
        for(let i=0; i<data.length; i++){
            temp+=`<div class="col-md-3">
            <div class="inner rounded position-relative overflow-hidden" id="${data[i].idMeal}">
                <div>
                    <img src="${data[i].strMealThumb}" class="w-100 rounded" alt="">
                </div>
                
                <div class="layer rounded p-1">
                    <h2>${data[i].strMeal}</h2>
                </div>
            </div>
            
        </div>`
        }
        document.getElementById("main").innerHTML= temp;
        new Details();
    }

}