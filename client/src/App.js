import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Chat,
  Ingredients,
  Recipe,
  Done
} from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </Router>
    );
  }
}

export default App;
