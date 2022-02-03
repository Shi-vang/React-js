import React,{useEffect} from 'react'

function ChildComponent(props) {
    const btnRefs=React.createRef(); 

    useEffect(()=>{
        console.log('get refs data',btnRefs.current);
    });

    return (
        <div>
            <p>This is child component.</p>
            <button ref={btnRefs} onClick={()=>props.getData("child sended data")}>Click to pass data from child to parent</button>
        </div>
    )
}

export default ChildComponent
