// ================================
// CarDex JavaScript
// الإصدار الأول
// ================================

let cars = [];

// تحميل قاعدة البيانات
fetch("cars.json")
.then(response => response.json())
.then(data => {

cars = data;

console.log("تم تحميل قاعدة البيانات");

console.log(cars);

})
.catch(error => {

console.log("حدث خطأ");

console.log(error);

});

// البحث

function searchCars(){

function searchCars(){

const input=document.getElementById("searchInput");

const resultsBox=document.getElementById("searchResults");

if(!input||!resultsBox)return;

const text=input.value.toLowerCase();

resultsBox.innerHTML="";

if(text==="") return;

const results=cars.filter(car=>

car.brand.toLowerCase().includes(text) ||

car.model.toLowerCase().includes(text)

);

if(results.length===0){

resultsBox.innerHTML=`
<div class="result-card">
<h3>لا توجد نتائج</h3>
<p>جرّب كتابة اسم شركة أو سيارة أخرى.</p>
</div>
`;

return;

}

results.forEach(car=>{

resultsBox.innerHTML+=`

<div class="result-card">

<h3>${car.brand} ${car.model}</h3>

<p>⚙️ ${car.engine}</p>

<p>⚡ ${car.power}</p>

<p>💰 ${car.price}</p>

</div>

`;

});

}

}

// عند الكتابة داخل مربع البحث

const searchBox = document.getElementById("searchInput");

if(searchBox){

searchBox.addEventListener("input",searchCars);

}
