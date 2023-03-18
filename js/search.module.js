import { Details } from "./Details.module.js";
export class search{
    constructor(){
        this.searN=document.getElementById("searN");
        this.searF=document.getElementById("searF");
        
        this.serchName();
        this.serchLetter();
    }
    serchName(){
        this.searN.addEventListener("keyup",()=>{
            let name=this.searN.value;
            this.getDataN(name);
        })
    }
    serchLetter(){
        this.searF.addEventListener("keyup",()=>{
            let letter=this.searF.value;
            this.getDataL(letter);
        })
    }
    async getDataN(name){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let recponse= await api.json();
        // console.log(recponse.meals);
        this.display(recponse.meals);
        
    }
    async getDataL(letter){
        let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let recponse= await api.json();
        // console.log(recponse.meals);
        this.display(recponse.meals);
    }
    async display(data){
        let tmp=``;
        for(let i=0; i<data.length;i++){
            tmp+=`<div class="col-md-3">
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
        document.querySelector(".searchR").innerHTML=tmp;
        
        new Details();
        // this.searN.value="";
        // this.searF.value="";
    }
 }