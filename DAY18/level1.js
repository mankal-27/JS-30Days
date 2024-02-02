const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        for(eachData of data){
            var name = eachData.name;
            var capital = eachData.capital;
            var language = eachData.languages;
            var population = eachData.population;
            var area = eachData.area;
            console.log(`
            Country: ${name}
            Capital: ${capital}
            Languages: ${language}
            Population: ${population}
            Area: ${area}
        `);
         }
    })
    .catch(error => console.error(error));

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(eachData => {
            var name = eachData.name;
            var capital = eachData.capital;
            var languages = eachData.languages.map(language => language.name).join(', ');
            var population = eachData.population;
            var area = eachData.area;

            // Print information for each country
            console.log(`
                Country: ${name}
                Capital: ${capital}
                Languages: ${languages}
                Population: ${population}
                Area: ${area}
            `);
        });
    })
    .catch(error => console.error(error));

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(eachValue => {
            var catNames = eachValue.name;
            console.log("Cat Name : ", catNames)
        });
    })
    .catch(error => console.error(error));