import React, {useState} from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {

    const [name,setName]=useState('');

    const pull_Data = (data)=>{
        setName(data)
        console.log('Pulling data from child to parent');
    }

    return (
        <div>
            <p>This is parent component.</p>
            <p>pull data from child {name??""}</p>
            <ChildComponent getData={pull_Data}/>
        </div>
    )
}

export default ParentComponent
