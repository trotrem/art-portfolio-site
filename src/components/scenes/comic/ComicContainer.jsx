import React, { Component } from "react";
import Comic from "./Main";
import { getMandyMaxPages } from "../../../services/api";

export default class ComicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            maxPages: 0
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        getMandyMaxPages().then(result => {
            this.setState({isLoading: false, maxPages: result.data.maxPages});
        }).catch((err) => console.error("comm error - " + err));
    }

    render() {
        return (<Comic isLoading={this.state.isLoading} maxPages={this.state.maxPages} {...this.props}/>);
    }
}
