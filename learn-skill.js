function filterSkills(){
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(card=>{
        const title = card.querySelector("h2").innerText.toLowerCase();
        const desc = card.querySelector("p").innerText.toLowerCase();
        const type = card.getAttribute("data-type");

        const matchSearch = title.includes(search) || desc.includes(search);
        const matchCategory = category === "all" || type === category;

        card.style.display = (matchSearch && matchCategory) ? "block" : "none";
    });
}