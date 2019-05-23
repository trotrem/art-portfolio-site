import React, { Component } from "react";
import Comic from "./Main";
//import { getMandyMaxPages } from "../../../services/api";

export default class ComicContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      maxPages: 0
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: false, maxPages: 112 })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (<Comic isLoading={this.state.isLoading} maxPages={this.state.maxPages} {...this.props} />);
  }
}
