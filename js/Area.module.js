import { Details } from "./Details.module.js";

export class Area{
    constructor(){
        this.getData();
    }
    async getData(){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let response= await api.json();
        // console.log(response.meals);
        this.display(response.meals);
    }
    display(data){
        let temp=``;
        for(let i=0; i<data.length; i++){
            temp+=`<div class="col-md-3 text-center">
            <div class="inner" id="${data[i].strArea}">
                <p><i class="fa-solid fa-house-laptop fa-4x text-light"></i></p>
                <h3>${data[i].strArea}</h3>
            </div>
        </div>`
        }
        document.getElementById("areaR").innerHTML=temp;

        const inner= Array.from(document.getElementsByClassName("inner"));
        
        inner.forEach((el)=>{
            el.addEventListener("click",()=>{
                let id=el.getAttribute("id") ;
                $(".made").not(".areaDet").css("display","none");
                $(".areaDet").css("display","block");
                this.getDetails(id);
            })
        })
    }
    async getDetails(area){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
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
        document.getElementById("areaDetR").innerHTML=temp;
        new Details;
    }

}