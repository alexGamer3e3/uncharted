function search() {
  let filter = document.getElementById("searchInput").value.toLowerCase();
  let elements = document.querySelectorAll(".item"); // elementos a serem filtrados

  elements.forEach(el => {
    if (el.textContent.toLowerCase().includes(filter)) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
}
<input type="text" id="searchInput" onkeyup="search()" placeholder="Search..."></input>
function searchPage() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  if (value.includes("uncharted 1")) {
    window.location.href = "../uncharted 1.html";
  } else if (value.includes("uncharted 2")) {
    window.location.href = "../uncharted 2.html";
  } else if (value.includes("uncharted 3")) {
    window.location.href = "../uncharted 3.html";
  } else if (value.includes("uncharted 4")) {
    window.location.href = "../uncharted 4.html";
  } else {
    alert("Página não encontrada!");
  }
}