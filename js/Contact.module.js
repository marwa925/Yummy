export class Contact{
    constructor(){
        this.nameFun();
        this.emailFun();
        this.phoneFun();
        this.ageFun();
        this.passFun();
        this.repassFun();
        this.nameI=false;
        this.emailI=false;
        this.phoneI=false;
        this.ageI=false;
        this.passI=false;
        this.repassI=false;
    }
    nameFun(){
        document.getElementById("name").addEventListener("change",()=>{
            const name = document.getElementById("name");
        let Reg= /^[a-zA-Z]{3,10}$/;
        if(Reg.test(name.value) ==true){
            $("#nameAlert").css("display","none");
            this.nameI=true;
            this.submit();
            return true;
        }else{
            $("#nameAlert").css("display","block");
            this.nameI=false;
            this.submit();
            return false;
        }
        });
    }
    emailFun(){
        document.getElementById("email").addEventListener("change",()=>{
            const email = document.getElementById("email");
            let Reg= /^[a-zA-Z\.0-9]{3,20}@[a-z]{5,7}\.[a-z]{2,3}$/;
            if(Reg.test(email.value) ==true){
                $("#alertEmail").css("display","none");
                this.emailI=true;
                this.submit();
                return true;
            }else{
                $("#alertEmail").css("display","block");
                this.emailI=false;
                this.submit();
                return false;
            }
        });
    }
    phoneFun(){
        document.getElementById("phone").addEventListener("change",()=>{
            const phone = document.getElementById("phone");
            let Reg= /^01[0-9]{9}$/;
            if(Reg.test(phone.value) ==true){
                $("#alertPhone").css("display","none");
                this.phoneI=true;
                this.submit();
                return true;
            }else{
                $("#alertPhone").css("display","block");
                this.phoneI=false;
                this.submit();
                return false;
            }
        });
    }
    ageFun(){
        document.getElementById("age").addEventListener("change",()=>{
            const age = document.getElementById("age");
        let Reg= /^(0?[1-9]|[1-9][0-9])$/;
        if(Reg.test(age.value) ==true){
            $("#alertAge").css("display","none");
            this.ageI=true;
            this.submit();
            return true;
        }else{
            $("#alertAge").css("display","block");
            this.ageI=false;
            this.submit();
            return false;
        }
        });
    }
    passFun(){
        document.getElementById("pass").addEventListener("change",()=>{
            const pass = document.getElementById("pass");
            let Reg= /^[a-zA-Z0-9]{8}$/;
            if(Reg.test(pass.value) ==true){
                $("#alertPass").css("display","none");
                this.passI=true;
                this.submit();
                return true;
            }else{
                $("#alertPass").css("display","block");
                this.passI=false;
                this.submit();
                return false;
            }
        });
    }
    repassFun(){
        document.getElementById("repass").addEventListener("change",()=>{
            if(document.getElementById("pass").value == document.getElementById("repass").value){
                $("#alertRepass").css("display","none");
                this.repassI = true;
                this.submit();
                return true;
            }else{
                $("#alertRepass").css("display","block");
                this.repassI = false;
                this.submit();
                return false;
            }
        });
    }
    submit(){
        if(this.nameI ==true && this.emailI ==true && this.phoneI ==true && this.ageI ==true && this.passI ==true && this.repassI == true){
            $("#submit").removeAttr("disabled");
        }else{
            let sub=document.getElementById("submit");
            sub.setAttribute("disabled",'');
            console.log("dis")
        }
    }
}