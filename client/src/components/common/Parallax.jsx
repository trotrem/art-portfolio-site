import React, {Component} from "react";

function withParallax(WrappedComponent, speed) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {transform: "translateY(0%)"}
            this.update = this.update.bind(this);
        }
        
        componentDidMount() {
            this.update();
        }
        
        update() {
            this.setState({
                transform: `translateY(${-speed / 1000 * window.pageYOffset}px)`
            })
            
            window.requestAnimationFrame(this.update);
        }
        
        render() {
            return (
                <WrappedComponent {...this.props} style={{transform: this.state.transform}}/>
            )
        }
    }
}

export default withParallax;
