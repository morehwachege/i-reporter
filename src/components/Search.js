import React from "react";

function Search({search, setSearch}) {
    return (
        <div>
            <input
            className="searchbar"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    )
}

export default Search