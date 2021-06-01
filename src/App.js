import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import logo from './sad.jpg';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';


class App extends Component {

  state = {
    location: '',
    apiKey: '7721bf92f8decccfcb7e72704f8f58b1',
    weather: '',
    hide: '',
    show: 'hidden',
  }
  handleChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.location + '&units=imperial&appid=' + this.state.apiKey)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.main);
        this.setState({ weather: res.data.main })
        this.setState({ hide: "hidden", show: "" })
      })
  }

  cancelHide = (event) => {
    this.setState({ show: "hidden", hide: "" })
  }

  render() {
    return (
      <div className="App" >
        <Container fluid>
          <Row>
            <Col xs={12} md={6} >

              <div class="p-4 w-100 mx-auto text-center">


                <img src={logo} class="w-100" height="900px" alt="" />
              </div>
            </Col >
            <Col xs={12} md={6}>
              <div class="d-flex   align-items-center" >
                <div class="w-75 px-5 text-center center">
                  <h1 class="mx-auto">The Weather Chewaf</h1>
                  <div class={this.state.hide}>


                    <hr />
                    <form onSubmit={this.handleSubmit}>
                      <div class="form-group">
                        <label >
                          <h1 class="mb-3">
                            Location Name
                    </h1>
                          <input type="text" name="location" class="w-100 w-100 formi" onChange={this.handleChange} />
                        </label>
                      </div>
                      <button type="submit" class="btn btn-success">Choof it</button>
                    </form>
                    <hr />
                  </div>
                  <h1>
                    <div className={this.state.show} >
                      <h1 class="my-1">
                        {this.state.location} :

                      </h1>
                      <h1 class="my-1 text-success">
                        {(this.state.weather.temp - 32) * 5 / 9}

                      </h1>
                      <br />
                      <button onClick={this.cancelHide} class="btn btn-primary">Search Again</button>
                    </div>
                  </h1>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div >
    );

  }
}

export default App;