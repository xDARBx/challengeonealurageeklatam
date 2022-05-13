const userCardTemplate = document.querySelector("[productos]")
const userCardContainer = document.querySelector("[producto__footer]")
const searchInput = document.querySelector("[data-search]")

let productos = 

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLoweCase()
    productos.forEach(productos => {
        const isVisible = productos.id.toLowerCase().includes(value) || 
        productos.category.toLowerCase().includes(value)
        productos.element.classList.toggle("hide", !isVisible)
    });
})

fetch("https://xdarbx.github.io/jsonapi/productos.json")
.then (res => res.json())
.then (data => {
    productos = data.map(productos => {
        const card = userCardTemplate.textContent.cloneNode(true).children[0]
        const header = card.querySelector("[producto]")
        const body = card.querySelector("[producto__footer]")
        header.textContent = productos.id
        body.textContent = productos.category
        userCardContainer.append(card)
        return { productos: productos.id, productos: productos.category, element: card}
});
})