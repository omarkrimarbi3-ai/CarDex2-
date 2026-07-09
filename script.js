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

const input = document.getElementById("searchInput");

if(!input) return;

const text = input.value.toLowerCase();

const results = cars.filter(car =>

car.brand.toLowerCase().includes(text) ||

car.model.toLowerCase().includes(text)

);

console.log(results);

}

// عند الكتابة داخل مربع البحث

const searchBox = document.getElementById("searchInput");

if(searchBox){

searchBox.addEventListener("input",searchCars);

}
