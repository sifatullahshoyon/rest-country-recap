import React, { useState } from "react";
import Spinner from "./Spinner";

const SearchField = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(''); // Track user input
    const [loading, setLoading] = useState(false); // Loading state

    const handleSearchBtn = (e) => {
        e.preventDefault(); // Prevent form submission
        setLoading(true); // Start loading when search begins

        // Fetch the countries by name using the search term
        fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false); // Stop loading when fetch is done
                if (data.status !== 404) {
                    onSearch(data); // Pass search results to the parent component
                } else {
                    onSearch([]); // If no results, pass an empty array
                }
                setSearchTerm(''); // Clear the search input after search is complete
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Stop loading in case of error
                onSearch([]); // Handle error by showing no results
                setSearchTerm(''); // Clear the input on error as well
            });
    };

    return (
        <div>
            <form className="max-w-md mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full relative p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Country By Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        required
                    />
                    <button
                        onClick={handleSearchBtn}
                        type="submit"
                        className="text-white absolute top-2 right-0 mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Loading spinner */}
            {loading && (
                <Spinner />
            )}
        </div>
    );
};

export default SearchField;
