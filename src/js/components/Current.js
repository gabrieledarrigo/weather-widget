var Current = React.createClass({
    getDefaultProps() {
        return {
            name: '',
            weather: [{icon: ''}],
            main: {
                humidity: '',
                pressure: '',
                temp:''
            },
            wind: {
                speed: ''
            }
        };
    },
    toCelsius(k) {
        return Math.round(k - 273.15);
    },
    currentDate() {
        return moment().format('dddd HH:MM')
    },
    render() {
        return (
            <div className="current">
                <h2 className="current__city">
                    { this.props.name
                            ? `City of ${this.props.name}`
                            : ''
                    }
                </h2>

                <h3 className="current__time">
                    { this.currentDate() }
                </h3>

                { this.props.main.temp
                    ?
                    <h3 className="current__temperature">
                        <i className={'owf owf-' + this.props.weather[0].id + '-d'}></i>
                        {this.toCelsius(this.props.main.temp)}
                        <span className="metric">°C</span>
                    </h3>
                    : null
                }

                <article className="current__weather">
                    <h4 className="current__weather__title">
                        <span className="current__weather__label">
                            Current conditions:
                        </span>

                        { this.props.weather.map(entry =>
                            <strong className="current__weather__conditions" key={ entry.id }>
                                { entry.main }
                            </strong>
                        )}
                    </h4>
                </article>

                <article className="current__stats">
                    <header className="current__stats__header">
                        <h3 className="current__stats__title">
                            Statistic
                        </h3>
                    </header>

                    <table className="stats">
                        <tbody>
                        <tr className="stats__row">
                            <td className="stats__left">
                                Humidity
                            </td>
                            <td className="stats__right">
                                { this.props.main.humidity }%
                            </td>
                        </tr>
                        <tr className="stats__row">
                            <td className="stats__left">
                                Pressure
                            </td>
                            <td className="stats__right">
                                { this.props.main.pressure }
                            </td>
                        </tr>
                        <tr className="stats__row">
                            <td className="stats__left">
                                Wind
                            </td>
                            <td className="stats__right">
                                { this.props.wind.speed } Km/h
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </article>

            </div>
        );
    }
});

window.Current = Current;