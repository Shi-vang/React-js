
import React from 'react'

const Button=(props)=> {
    console.log("buton for ",props) 

    props.pull_data?props.pull_data("send data from child component to parent component"):console.log("pull data not present")
    
    return (
        <div>
            <button onClick={props.callFunction}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button)
