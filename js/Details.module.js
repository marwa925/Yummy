import {search} from './search.module.js'
export class Details{
    constructor(){
        this.imgId=document.getElementById("imgId");
        this.title=document.getElementById("title");
        this.desc=document.getElementById("desc");
        this.area=document.getElementById("area");
        this.categ=document.getElementById("categ");
        this.tags=document.getElementById("tags");
        this.youtupe=document.getElementById("youtupe");
        this.source=document.getElementById("source");
        
        this.getId();
    }
    getId(){
        const cards= Array.from(document.getElementsByClassName("inner"));
        cards.forEach((el)=>{
            el.addEventListener("click",()=>{
            const id=el.getAttribute("id");
            // console.log(id)
            $(".made").not(".details").css("display","none");
            $(".details").css("display","block");
            this.getData(id);
            })
            
        })
        
        
    }
    async getData(id){
        const data= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result= await data.json();
        console.log(result);
        this.imgId.setAttribute("src",`${result.meals[0].strMealThumb}`);
        this.title.innerHTML=result.meals[0].strMeal;
        this.desc.innerHTML=result.meals[0].strInstructions;
        this.area.innerHTML=result.meals[0].strArea;
        this.categ.innerHTML=result.meals[0].strCategory;
        // this.tags.innerHTML=result.meals[0].strTags;
        if(result.meals[0].strTags !=null){
            let arr=result.meals[0].strTags.split(",");
            console.log(arr);
            let tag=``;
            for(let i=0; i<arr.length; i++){
                tag+=`<li>${arr[i]}</li>`
            }
            document.getElementById("tags").innerHTML=tag;
        }
        this.youtupe.setAttribute("href",`${result.meals[0].strYoutube}`);
        this.source.setAttribute("href",`${result.meals[0].strSource}`);
        let meal=result.meals[0];
        let temp=``
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
            temp+=`<li>${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`;
            }
        }
        document.getElementById("recipes").innerHTML=temp;
        
        document.getElementById("search").addEventListener("click",function(){
            $(".details").css("display","none");
            $(".search").css("display","block");
            document.querySelector(".searchR").innerHTML="";
            // new search();
        })
        document.getElementById("searN").value= "";
        document.getElementById("searF").value="";
        document.querySelector(".searchR").value="";
    }

}