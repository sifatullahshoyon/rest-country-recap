import React, { useEffect, useState } from 'react';
import SearchField from '../SearchField';
import Country from '../Country/Conuntry';
import Spinner from '../Spinner';

const Countries = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]); // Store filtered countries

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
                setFilteredCountries(data.slice(0, 12)); // Display first 12 countries by default
            } catch (error) {
                console.error('Error fetching countries:', error);
            } finally {
                setLoading(false); // Stop loading after fetch completes or errors out
            }
        };

        fetchCountries();
    }, []);

    // Function to handle search from the SearchField component
    const handleSearch = (searchResults) => {
        if (searchResults.length > 0) {
            setFilteredCountries(searchResults); // Update with search results
        } else {
            setFilteredCountries(countries.slice(0, 12)); // Reset to first 12 if search results are empty
        }
    };

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>All Countries</h1>
            <SearchField onSearch={handleSearch} /> {/* Pass search handler */}
            
            {loading ? (
                <Spinner /> // Show Spinner while loading
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                    {filteredCountries.map(country => (
                        <Country key={country.cca3} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Countries;
