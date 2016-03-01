import React, { Component } from 'react';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(city_data) {
    const name = city_data.city.name;
    const temperatures = city_data.list.map(weather => weather.main.temp);
    const humidities = city_data.list.map(weather => weather.main.humidity);
    const pressures = city_data.list.map(weather => weather.main.pressure);
    const { lon, lat } = city_data.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temperatures} color="red" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
