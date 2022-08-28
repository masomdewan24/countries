const lodeCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach( country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
        <h3> Country Name: ${country.name.common} </h3>
        <p> Country Name: ${country.capital ? country.capital[0] : 'No Capa'} </p>
        <button onclick="lodeCountryDetails( '${country.cca2}')">Details</button>
        
        `;

        countriesContainer.appendChild(countryDiv);


    })
}
const lodeCountryDetails = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
// console.log('get Country Details:', code)
// console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displayFlag(data[0]))
}
const displayFlag = flag => {
    // console.log(flag);
    const countryFlagDiv = document.getElementById('country-flag');
    countryFlagDiv.innerHTML= `
    <h2> Country Name: ${flag.name.common} </h2>
    <img src="${flag.flags.png}"/>
    
    `
} 

lodeCountries();