import { Home } from "./Home.module.js";
import {search} from "./search.module.js";
import {Category} from "./Category.module.js"
import { Area } from "./Area.module.js";
import { Ingredient } from "./Ingredient.module.js";
import { Contact } from "./Contact.module.js";
$(document).ready(function(){
    $(".loading").fadeOut(3000);

    let bars= document.getElementById("barIcon");
    let navContent= document.querySelector(".nav-content");
    let navWidth= $(".nav-content").outerWidth();
    $(".nav-side").animate({left:`-${navWidth}px`},10); 
    
   $("#barIcon,#close").click(function(){
    let navWidth= $(".nav-content").outerWidth();
    let navLeft= $(".nav-side").css("left");
        if(navLeft =="0px"){
            $(".nav-side").animate({left:`-${navWidth}px`},500)
            $(".closeD").hide(100,function(){
                $(".bars").show(100);
            });
            $(".nav-links ul li").removeClass("animate__bounceInUp");
            $(".nav-links ul li").addClass("animate__bounceInDown");
        }else{
            $(".nav-side").animate({left:`0px`},500)
            $(".bars").hide(100,function(){
                $(".closeD").show(100);
            });
            $(".nav-links ul li").removeClass("animate__bounceInDown");
            $(".nav-links ul li").addClass("animate__bounceInUp ");
            
            
        }
   })
   document.getElementById("search").addEventListener("click",function(){
    sideBar();
    $(".made").not(".search").css("display","none");
    $(".search").css("display","block");
    let sear= new search;
   })
   document.getElementById("categoryLink").addEventListener("click",function(){
    sideBar();
    $(".made").not(".categ").css("display","none");
    $(".categ").css("display","block");
    let cate= new Category;
   })
   document.getElementById("areaLink").addEventListener("click",function(){
    sideBar();
    $(".made").not(".area").css("display","none");
    $(".area").css("display","block");
    let area= new Area;
   })
   document.getElementById("ingredientLink").addEventListener("click",function(){
    sideBar();
    $(".made").not(".ingredient").css("display","none");
    $(".ingredient").css("display","block");
    let ingre=new Ingredient;
   })
   document.getElementById("contactLink").addEventListener("click",function(){
    sideBar();
    $(".made").not(".contact").css("display","none");
    $(".contact").css("display","block");
    new Contact;
   })
    function sideBar(){
    $(".nav-side").animate({left:`-${navWidth}px`},500);
    $(".closeD").hide(100,function(){
        $(".bars").show(100);
        $(".nav-links ul li").removeClass("animate__bounceInUp");
            $(".nav-links ul li").addClass("animate__bounceInDown");
    });
    }
    
    let home=new Home;
    
})


