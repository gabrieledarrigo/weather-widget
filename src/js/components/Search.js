var Search = React.createClass({
    getInitialState() {
        return {
            city: ''
        };
    },
    onChange(e) {
        this.setState({
            city: e.target.value
        });
    },
    onKeyPress(e) {
        if (e.charCode == 13) {
            return this.onSubmit();
        }
    },
    onSubmit() {
        this.props.onSearch(this.state.city);
        this.setState({ city: '' });
    },
    render() {
        return (
            <div id="search-bar" className="search-bar">
                <input type="search" name="city" className="search-bar__input" placeholder="Search for a city"
                       onChange={ this.onChange }
                       onKeyPress={ this.onKeyPress }
                       value={ this.state.city }/>

                <button type="submit" onClick={ this.onSubmit }  className="search-bar__control">
                    Search
                </button>
            </div>
        );
    }
});

window.Search = Search;