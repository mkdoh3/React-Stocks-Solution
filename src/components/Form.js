import React from "react";

class Form extends React.Component {
    state = {
        ticker: "",
        name: "",
        type: "",
        price: 0,
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleOnSubmit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="ticker">Ticker:</label>
                <input
                    type="text"
                    name="ticker"
                    value={this.state.ticker}
                    onChange={this.handleOnChange}
                />
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleOnChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleOnChange}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
