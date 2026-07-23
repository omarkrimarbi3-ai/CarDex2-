let cars = [];

fetch("cars.json")
.then(response => response.json())
.then(data => {
    cars = data;
});

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

if (input && results) {

    input.addEventListener("input", function () {

        const text = input.value.toLowerCase().trim();

        results.innerHTML = "";

        if (text === "") {
            results.style.display = "none";
            return;
        }

        const found = cars.filter(car =>
            car.name.toLowerCase().includes(text)
        );

        if (found.length === 0) {
            results.innerHTML = "<div class='result'>لا توجد نتائج</div>";
            results.style.display = "block";
            return;
        }

        found.forEach(car => {

            const div = document.createElement("div");

            div.className = "result";

            div.textContent = car.name;

            div.onclick = function () {
                window.location.href = car.page;
            };

            results.appendChild(div);

        });

        results.style.display = "block";

    });

    document.addEventListener("click", function (e) {

        if (!e.target.closest(".search-box")) {
            results.style.display = "none";
        }

    });

}
