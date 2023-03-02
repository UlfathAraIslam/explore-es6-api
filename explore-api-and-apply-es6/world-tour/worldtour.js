const loadAllData = () => {

    fetch("https://restcountries.com/v3/all")
        .then((res) => res.json())

        .then(data => showAllData(data.slice(0, 10)));
}
const showAllData = (countries) => {

    const countryContainer = document.getElementById("countries-info");
    countryContainer.innerHTML = '';
    countries.forEach((country) => {
        // console.log(country.cca2);


        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
    <img src="${country.flags[1]}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <p>Currency: ${Object.keys(country.currencies)[0]}</p>
    <div class="card-actions">
    <label onClick="showSingleCountry('${country.cca2}')" class="btn btn-primary"for="my-modal-3" class="btn">Show Details</label>
    </div>
    </div>
</div>
`;
        countryContainer.appendChild(div);


    });

};

loadAllData();

const showAllDataTogether = () => {
    fetch("https://restcountries.com/v3/all")
        .then((res) => res.json())

        .then(data => showAllData(data));
}

const showSingleCountry = (id) => {
    // console.log(id);
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => showSingleCountryDataModal(data[0]));
};
const showSingleCountryDataModal = (value) => {
    // console.log(Object.keys(value.currencies)[0]);
    const container = document.getElementById("modal-info");
    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
            <div class="modal-box relative">
                
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <img src="${value.flags.png}" alt="">
                <h3 class="text-lg font-bold">${value.name.common}</h3>
                
                <p class="py-4">Population: ${value.population}</p>
                
            </div>
        
    `;
    container.appendChild(div);
};