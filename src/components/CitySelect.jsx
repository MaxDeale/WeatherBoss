import React, { Component } from "react";
import Display from "./Display";

class CitySelect extends Component {
 
    
    state = {
      loading: true,
      weatherInfo: "",
      weatherInfoDegrees: "",
      weaterInfoHumidity: "",
      weatherInfoWindSpeed: "",
      currentCity:"paarl"
    };
  
 
  async componentDidMount() {
    
    const {currentCity} = this.state;
    try{

      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&APPID=f137ac696ed382fd7b4ba99a441bc329`)
      .then(res => res.json())
      .then(result => {
      // console.log(result);

      // using the info from the api call to set the values in state
      this.setState({
        weatherInfo: result.weather[0].main,
        weatherInfoDegrees: result.main.temp,
        weatherInfoHumidity: result.main.humidity,
        weatherInfoWindSpeed: result.wind.speed
      });
    });
   } catch(err){
   console.error(err)
     
  }

  }

  // function to get the name of the selected city using the option form
  handleCitySelect=(e)=> {
    e.preventDefault();
    let cityOption = e.target.value;
    // console.log(cityOption);
    this.setState({
          currentCity: cityOption
    });
this.componentDidMount();
    return cityOption;
  }


  render() {
    const {
      weatherInfo,
      weatherInfoDegrees,
      weatherInfoHumidity,
      weatherInfoWindSpeed,
      currentCity
    } = this.state;
    return (
      // form to select city
    
       <div>
     <div id="display" className="container">
        <form onChange={this.handleCitySelect}>
          <h3 id="citySelect">Select City</h3>
          <select name="citySelector" id="citySelector">
            <option value="Paarl">Paarl</option>
            <option value="London">London</option>
            <option value="Johannesburg">Johannesburg</option>
            <option value="Perth">Perth</option>
            <option value="Boston">Boston</option>
            <option value="Pheonix">Pheonix</option>
            <option value="Pretoria">Pretoria</option>
            <option value="Gilbert">Gilbert</option>
            <option value="Zibo">Zibo</option>
            <option value="Amsterdam">Amsterdam</option>
          </select>
        </form>
      </div>
      <Display City = {currentCity}  weatherInfo = {weatherInfo} weatherInfoDegrees ={weatherInfoDegrees} weatherInfoHumidity= {weatherInfoHumidity} weatherInfoWindSpeed = {weatherInfoWindSpeed} />
       </div>

 
    );
  }
}

export default CitySelect;
