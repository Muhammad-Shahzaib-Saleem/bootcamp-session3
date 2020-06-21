import React from 'react';


function Dinner(props){
    return(
        <div>
            <h1>We are serving food {props.dishName}</h1>
    <h1>We are serving sweet {props.sweetDish}</h1>
        </div>
    );

}
export default Dinner;