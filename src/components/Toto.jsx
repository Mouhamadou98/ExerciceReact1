import React from "react";

const Toto = (props) => {

    const response = props.leState.messageMaman?<button onClick={props.reponseToto}>Réponse</button>:<button disabled>Réponse</button>;
    return(
        <div>
            <h2>{props.nom}</h2>
            {response}
            <p>{props.leState.messageToto}</p>
        </div>
    )
}

export default Toto