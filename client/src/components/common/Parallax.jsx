import React, {Component} from "react";
import ScrollManager from "window-scroll-manager"

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
                transform: `translateY(${-speed * window.pageYOffset}px)`
            })
            
            window.requestAnimationFrame(this.update);
        }
        
        render() {
            let style = {
            }
            return (
                <WrappedComponent {...this.props} style={{transform: this.state.transform}}/>
            )
        }
    }
}

export default withParallax;
