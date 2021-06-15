import React from "react";

const Stock = ({ id, name, ticker, price, handleOnClick, inPortfolio }) => (
    <div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {ticker}: {price}
                </p>
                <button onClick={() => handleOnClick(id)}>
                    {inPortfolio ? "Sell" : "Buy"}
                </button>
            </div>
        </div>
    </div>
);

export default Stock;
