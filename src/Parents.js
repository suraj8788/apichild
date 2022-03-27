import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';
import ChildA from './ChildA';
// import ChildA from './ChildA';
const Parent = () => {
    // Variables
    const [show, setShow] = useState(false)
    const [data, setdata]= useState(false)

    // JSX
    return (
        <div>
            <div>
                <h1>Parent</h1>
            </div>
            <div>
                <input type="button" value={"Show/Hide Child 1"} onClick={e =>setShow(!show)}></input>
            </div>
            {/* <div>
                <input type='button' value={"Hide Child 1"} onClick={e =>setShow(false)}></input>
            </div> */}
            <div>
                <input type='button' value={"Show/Hide Child 2"} onClick={e=>setdata(!data)}></input> 
            </div>
            {/* <div>
                <input type='button' value={"Hide Child 2"} onClick={e=>setdata(false)}></input> 
            </div> */}

            <Child show={show} />
            <ChildA myProp={data} />
        </div>
        
    )
}

export default Parent
