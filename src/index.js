import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

    constructor() 
    {
        super()
        this.state = { latitude: null, errorMessage: '' }

    }
    /* State constructor disinda tanimlama
    state = { latitude: null, errorMessage: '' }*/
    componentDidMount() 
    {
        window.navigator.geolocation.getCurrentPosition(
            /*User's Location verification  */
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            /*If  Location is wrong  */
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );

    }
    /* LifeCyclr Methods  Component cagrildiginda Api'ye istek atma durmunda */
    /* componentDidMount(){
        console.log('componentDidMount')
    }

    /*setState cagrildiginda dolaysiyla State guncellendiginde cagrilir */
    /*componentDidUpdate(){
        console.log('componentDidUpdate')
    }*/
    render() {
        /*  return (
             <div>
                 { this.state.latitude}
                 { this.state.errorMessage}
             </div>
         )*/
        /* ! latitude yoksa anlamina gelir*/
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if (this.state.latitude && !this.state.errorMessage) {
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }
        else {
            return <div> Loading....</div>
        }
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)