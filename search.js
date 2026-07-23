const cars = [

{name:"BMW 2 Series Gran Coupé",url:"2-series-gran-coupe.html"},
{name:"BMW 3 Series",url:"3-series.html"},
{name:"BMW 4 Series",url:"4-series.html"},
{name:"BMW 5 Series",url:"5-series.html"},
{name:"BMW 7 Series",url:"7-series.html"},
{name:"BMW 8 Series",url:"8-series.html"},
{name:"BMW Z4",url:"z4.html"},
{name:"BMW X1",url:"x1.html"},
{name:"BMW X3",url:"x3.html"},
{name:"BMW X5",url:"x5.html"},
{name:"BMW X6",url:"x6.html"},
{name:"BMW X7",url:"x7.html"},
{name:"BMW M2",url:"m2.html"},
{name:"BMW M3",url:"m3.html"},
{name:"BMW M4",url:"m4.html"},
{name:"BMW M5",url:"m5.html"},
{name:"BMW M8",url:"m8.html"},

{name:"Mercedes A-Class",url:"a-class.html"},
{name:"Mercedes C-Class",url:"c-class.html"},
{name:"Mercedes E-Class",url:"e-class.html"},
{name:"Mercedes S-Class",url:"s-class.html"},
{name:"Mercedes CLA",url:"cla.html"},
{name:"Mercedes CLS",url:"cls.html"},
{name:"Mercedes GLA",url:"gla.html"},
{name:"Mercedes GLC",url:"glc.html"},
{name:"Mercedes GLE",url:"gle.html"},
{name:"Mercedes GLS",url:"gls.html"},
{name:"Mercedes G-Class",url:"g-class.html"},
{name:"Mercedes SL",url:"sl.html"},
{name:"Mercedes AMG GT",url:"amg-gt.html"}

];

const input=document.getElementById("searchInput");
const results=document.getElementById("searchResults");

input.addEventListener("keyup",function(){

const value=input.value.toLowerCase();

results.innerHTML="";

if(value===""){
results.style.display="none";
return;
}

const filtered=cars.filter(car=>car.name.toLowerCase().includes(value));

filtered.forEach(car=>{

const item=document.createElement("div");

item.className="search-item";

item.innerHTML=car.name;

item.onclick=function(){
window.location.href=car.url;
};

results.appendChild(item);

});

results.style.display=filtered.length?"block":"none";

});
