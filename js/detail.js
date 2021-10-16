const detailContainer = document.querySelector('.flowers-details');

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

console.log(id);

const url = "https://jonathanminds.com/flower-power/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchFlowers() {
	try {
		const response = await fetch(url);

		const details = await response.json();

		console.dir(details);

		createHtml(details);
	}
	catch (error) {
		console.log(error);
		detailContainer.innerHTML = message('error', error);
	}
}

fetchFlowers();

function createHtml(details) {

	// for (let i = 0; i < details.legnth; i++)
	

	detailContainer.innerHTML = `<section class="container-content">
								<div class="flowerimage" style="background-image: url('${details.images[0].src}')"></div> 
								<div class="detail-info">
								<h1>The ${details.name}</h1>
                                <h2>${details.short_description}</h2>
								<h4> ${details.prices.currency_symbol} ${details.prices.price.substring(0, 2)}${details.prices.currency_decimal_separator}${details.prices.price.substring(2)} </h5> 
								<h4>Product Available  = ${details.is_in_stock}</h4>  
								<h5>Desciption : ${details.description}</h2></div>
								  </section>`;
	
}
