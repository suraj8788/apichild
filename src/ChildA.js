import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const ChildA=(props)=>{
    // Fetch API
    function viewApi( ) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://jsonplaceholder.typicode.com/albums", requestOptions)
            .then(response => response.json())
            .then(data =>{
               console.log(data)


               var str = "";
               for (var i = 0; i < data.length; i++) {
               str += "<tr>";
               str +=   "<td>"+ data[i].userId +"</td>";
               str +=   "<td>"+ data[i].id +"</td>";
               str +=   "<td>"+ data[i].title +"</td>";
               str += "</tr>";
               }      
               
               document.getElementById('tbody1').innerHTML = str;
            })
            .catch(error => console.log('error', error));  
    }

    // Fetch API Call
    useEffect(() => {
        viewApi()
    })

    // JSX
    return(
        <div>
            <div>
                <h1>Child 2</h1>
            </div>

            {props.myProp ?
                <table>
                    <thead>
                        <tr>
        
                            <th>User Id</th>
                            <th>Id</th>
                            <th>title</th>
                            {/* <th>Email</th>
                            <th colspan="6">Address</th>
                            <th>Phone</th>
                            <th>website</th>
                            <th colspan="3">Company</th> */}
                        </tr>
                    </thead>
    
                    <tbody id="tbody1">
    
                    </tbody>
                   
                        
                </table>  
                : 
                null      
            }
                    
            
        </div>
    )
}
export default ChildA;