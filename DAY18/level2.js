const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        //console.log(countries)       
        const largestCountries = countries.sort((a,b) => b.area - a.area).slice(0,10);
        console.log('10 Largest Countries: ', largestCountries.map(country => ({
            name: country.name,
            area: country.area
        })))
        const officialLanguagesSet = new Set();

        // Iterate over countries and add official languages to the set
        countries.forEach(country => {
            if (country.languages) {
                country.languages.forEach(language => {
                    officialLanguagesSet.add(language.name);
                });
            }
        });

        const totalOfficialLanguages = officialLanguagesSet.size;

        console.log('Total number of official languages in the world:', totalOfficialLanguages);
  
    } catch (error) {
        console.error("error while fetching api", error)
    }
}

fetchData();