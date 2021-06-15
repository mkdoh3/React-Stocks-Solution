import React from "react";

const SearchBar = (props) => {
    return (
        <div>
            <strong>Sort by:</strong>

            <label>
                <input
                    name="sort"
                    type="radio"
                    value="Alphabetically"
                    checked={null}
                    onChange={props.handleRadioClick}
                />
                Alphabetically
            </label>
            <label>
                <input
                    name="sort"
                    type="radio"
                    value="Price"
                    checked={null}
                    onChange={props.handleRadioClick}
                />
                Price
            </label>

            <br />

            <label>
                <strong>Filter:</strong>
                <select
                    onChange={(event) =>
                        props.handleOnChange(event.target.value)
                    }
                >
                    <option value="Tech">Tech</option>
                    <option value="Sportswear">Sportswear</option>
                    <option value="Finance">Finance</option>
                </select>
            </label>
            <button onClick={props.filterReset}>Clear</button>
        </div>
    );
};

export default SearchBar;
