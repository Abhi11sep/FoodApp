function navbar() {


    return `<div id="navbar">
    <h3><a href="index.html"> Home</a></h3>
    <div id="options">
    <h3 id="userdisplay"></h3>
        <h3><a href="repday.html"> Recipe of the day</a></h3>
        <h3><a href="ramrep.html">Random Recipe</a></h3>
    </div>
</div>`
}

function user(){
    let userdisplay=document.getElementById("userdisplay");
    let arr=JSON.parse(localStorage.getItem('userdata'))||[];
    if(arr.length===0){
        userdisplay.innerText="signup";
        userdisplay.addEventListener("click",function(){
            window.location.href="signup.html";
        })
    }else{
        userdisplay.innerText="Welcome!  "+arr.name;
    }
}

async function getdata(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
       return data;
    }
    catch (error) {
        console.log('error:',error);
    }
}

function display(data,contanier){
    data.meals.forEach(({strMealThumb,strMeal,strInstructions,strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,strMeasure19,strMeasure20,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20})=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=strMealThumb;
        let heading=document.createElement("h2");
        heading.innerText=strMeal;
        let para=document.createElement("p");
        para.innerText=strInstructions;
        let heading1=document.createElement("h3");
        heading1.innerText=strIngredient1+" - "+strMeasure1;
        let heading2=document.createElement("h3");
        heading2.innerText=strIngredient2+" - "+strMeasure2;
        let heading3=document.createElement("h3");
        heading3.innerText=strIngredient3+" - "+strMeasure3;
        let heading4=document.createElement("h3");
        heading4.innerText=strIngredient4+" - "+strMeasure4;
        let heading5=document.createElement("h3");
        heading5.innerText=strIngredient5+" - "+strMeasure5;
        let heading6=document.createElement("h3");
        heading6.innerText=strIngredient6+" - "+strMeasure6;
        let heading7=document.createElement("h3");
        heading7.innerText=strIngredient7+" - "+strMeasure7;
        let heading8=document.createElement("h3");
        heading8.innerText=strIngredient8+" - "+strMeasure8;
        let heading9=document.createElement("h3");
        heading9.innerText=strIngredient9+" - "+strMeasure9;
        let heading10=document.createElement("h3");
        heading10.innerText=strIngredient10+" - "+strMeasure10;
        let heading11=document.createElement("h3");
        heading11.innerText=strIngredient11+" - "+strMeasure11;
        let heading12=document.createElement("h3");
        heading12.innerText=strIngredient12+" - "+strMeasure12;
        let heading13=document.createElement("h3");
        heading13.innerText=strIngredient13+" - "+strMeasure13;
        let heading14=document.createElement("h3");
        heading14.innerText=strIngredient14+" - "+strMeasure14;
        let heading15=document.createElement("h3");
        heading15.innerText=strIngredient15+" - "+strMeasure15;
        let heading16=document.createElement("h3");
        heading16.innerText=strIngredient16+" - "+strMeasure16;
        let heading17=document.createElement("h3");
        heading17.innerText=strIngredient17+" - "+strMeasure17;
        let heading18=document.createElement("h3");
        heading18.innerText=strIngredient18+" - "+strMeasure18;
        let heading19=document.createElement("h3");
        heading19.innerText=strIngredient19+" - "+strMeasure19;
        let heading20=document.createElement("h3");
        heading20.innerText=strIngredient20+" - "+strMeasure20;
        


        div.append(heading,img,heading1,heading2,heading3,heading4,heading5,heading6,heading7,heading8,heading9,heading10,heading11,heading12,heading13,heading14,heading15,heading16,heading17,heading18,heading19,heading20,para);

        contanier.append(div);
    })
}

export {navbar,getdata,display,user};