let cars = [];

fetch("cars.json")
  .then(response => response.json())
  .then(data => {
    cars = data;
  })
  .catch(error => {
    console.error("Error loading cars.json:", error);
  });

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", function () {

  const value = input.value.toLowerCase().trim();

  results.innerHTML = "";

  if (value === "") {
    results.style.display = "none";
    return;
  }

  const found = cars.filter(car =>
    car.name.toLowerCase().includes(value)
  );

  if (found.length === 0) {
    results.innerHTML = "<div class='result'>No results found</div>";
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
