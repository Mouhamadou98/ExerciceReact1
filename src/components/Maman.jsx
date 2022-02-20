import React, {Component} from "react";
import Toto from "./Toto";
class Maman extends Component{
    state = {
        messageMaman : null,
        messageToto : null,
    }
    ordreMaman = () => {

        this.setState({
            messageMaman : "Va ranger ta Chambre"
        })
    }
    reponseToto = () => {

        this.setState({
            messageToto : "D'accord maman"
        })
    }
    render(){
        return(
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman} >ordre de Maman</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto reponseToto={this.reponseToto} nom="Toto" leState={this.state}/>
            </div>
        )
    }

}

export default Maman