var Weather = React.createClass({
    getInitialState() {
        return {
            cities: {},
            current: {},
            error: false,
            errorMessage: ''
        };
    },
    onSearch(city = '') {
        return this.fetchWeather(city);
    },
    onSuccess(data) {
        let cities = this.state.cities.hasOwnProperty(data.name)
                ? this.state.cities
                : Object.assign({}, this.state.cities, { [data.name]: data});

        return this.setState({
            cities: cities,
            current: data,
            error: false
        });
    },
    onError(e) {
        this.setState({ error: true, errorMessage: e.message });
    },
    fetchWeather(city) {
        return this.state.cities.hasOwnProperty(city)
            ? this.onSuccess(this.state.cities[city])
            :  getData(city)
                .then(toJson)
                .then(checkResponseCode)
                .then(this.onSuccess)
                .catch(this.onError);
    },
    render() {
        return (
            <section className="weather__widget">
                <Search onSearch={ this.onSearch } />
                { Object.keys(this.state.current).length  !== 0 && this.state.error === false
                    ? <Current { ...this.state.current } />
                    : null
                }

                { this.state.error
                    ? <ErrorMessage message={ this.state.errorMessage } />
                    : null
                }
            </section>
        );
    }
});

ReactDOM.render(<Weather />, document.getElementById('weather'));