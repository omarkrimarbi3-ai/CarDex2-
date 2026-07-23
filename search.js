const cars = [
{name:"Mercedes",url:"mercedes.html"},
{name:"BMW",url:"bmw.html"},
{name:"Audi",url:"audi.html"},
{name:"Toyota",url:"toyota.html"},
{name:"Porsche",url:"porsche.html"},
{name:"Ferrari",url:"ferrari.html"},

{name:"C180",url:"c180.html"},
{name:"C200",url:"c200.html"},
{name:"C220d",url:"c220d.html"},
{name:"C300",url:"c300.html"},
{name:"C300e",url:"c300e.html"},
{name:"C43 AMG",url:"c43.html"},
{name:"C63 AMG",url:"c63-amg.html"},

{name:"BMW M3",url:"m3.html"},
{name:"BMW M4",url:"m4.html"},
{name:"BMW M5",url:"m5.html"},
{name:"BMW M8",url:"m8.html"},

{name:"Audi A3",url:"a3.html"},
{name:"Audi A4",url:"a4.html"},
{name:"Audi A5",url:"a5.html"},
{name:"Audi A6",url:"a6.html"},
{name:"Audi A8",url:"a8.html"},
{name:"Audi TT",url:"tt.html"},
{name:"Audi R8",url:"r8.html"},

{name:"911",url:"911.html"},
{name:"Cayenne",url:"cayenne.html"},
{name:"Macan",url:"macan.html"},
{name:"Panamera",url:"panamera.html"},
{name:"Taycan",url:"taycan.html"},

{name:"296 GTB",url:"296-gtb.html"},
{name:"296 GTS",url:"296-gts.html"},
{name:"SF90",url:"sf90-stradale.html"},
{name:"Roma",url:"roma.html"},
{name:"Purosangue",url:"purosangue.html"},
{name:"F80",url:"f80.html"},

{name:"Corolla",url:"corolla.html"},
{name:"Camry",url:"camry.html"},
{name:"Land Cruiser",url:"land-cruiser.html"},
{name:"Hilux",url:"hilux.html"},
{name:"Supra",url:"gr-supra.html"}
];

const input=document.getElementById("searchInput");
const results=document.getElementById("searchResults");

input.addEventListener("input",function(){

const value=input.value.toLowerCase();

results.innerHTML="";

if(value===""){
results.style.display="none";
return;
}

const found=cars.filter(car=>car.name.toLowerCase().includes(value));

if(found.length===0){
results.innerHTML="<div class='result'>لا توجد نتائج</div>";
results.style.display="block";
return;
}

found.forEach(car=>{

const div=document.createElement("div");

div.className="result";

div.textContent=car.name;

div.onclick=()=>window.location=car.url;

results.appendChild(div);

});

results.style.display="block";

});

document.addEventListener("click",e=>{

if(!e.target.closest(".search-box")){

results.style.display="none";

}

});
