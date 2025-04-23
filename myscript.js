let product = document.getElementById("productId");

let productsAPI = () => {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {

            product.innerHTML = json.map((item, index) => {
                return `
    <div class="row">
          <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 100px;" />
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p><strong>Price: $${item.price}</strong></p>
      

    </div>
    `;
            }).join('');

            console.log(json);
        })
}


productsAPI();