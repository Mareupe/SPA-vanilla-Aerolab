import getData from "../utils/getData";

const Home = async () => {

    const products = await getData()

    const view = ` 
        <div class ="32 de 32 Products">${products.length} of ${products.length} Products</div>       
        <div class="Products">
            ${products.map((product) => `
                <article class="Products-items">
                    <a href="#/${product.name}/">
                        <img src="${product.img.hdUrl}" alt="${product.img.hdUrl}"
                        <h2>${product.category}</h2>
                        <h2>${product.name}</h2>
                    </a>
                </article>
                `).join('')}
        </div>
        <div class ="32 de 32 Products">${products.length} of ${products.length} Products</div>
    `
    return view
}

export default Home;