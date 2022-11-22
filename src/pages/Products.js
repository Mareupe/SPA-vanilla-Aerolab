import getHash from '../utils/getHash';
import getData from '../utils/getData';


const Product =  async () => {
    const id = getHash();
    const product = await getData(id);
    const view = `
        <div class="Products-inner">
            <article class="Products-card">
                <div><img src="${product.img.hdUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
            </article>

            <article class="Products-card">
                <h3>
                    <div class="ProductName">Name ${product.name}</div>
                    <div class="ProductCategory">Category ${product.category}</div>
                    <div class="ProductCost">Cost ${product.cost}</div>
                </h3>

            </article>
        </div> 
    `
    return view;
};
export default Product;