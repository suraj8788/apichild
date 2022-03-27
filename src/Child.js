import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Child = (props) => {
    // Fetch API 
    function viewDataApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(data =>{
               console.log(data)

                var str = "";
                for (var i = 0; i < data.length; i++) {
                str += "<tr>";
                str +=   "<td>"+ data[i].id +"</td>";
                str +=   "<td>"+ data[i].name +"</td>";
                str +=   "<td>"+ data[i].username +"</td>";
                str +=   "<td>"+ data[i].email +"</td>";
                str +=   "<td>"+ data[i].address.street +"</td>";
                str +=   "<td>"+ data[i].address.suite +"</td>";
                str +=   "<td>"+ data[i].address.city +"</td>";
                str +=   "<td>"+ data[i].address.zipcode +"</td>";
                str +=   "<td>"+ data[i].address.geo.lat +"</td>";
                str +=   "<td>"+ data[i].address.geo.lng +"</td>";
                str +=   "<td>"+ data[i].phone +"</td>";
                str +=   "<td>"+ data[i].website+"</td>";
                str +=   "<td>"+ data[i].company.name +"</td>";
                str +=   "<td>"+ data[i].company.catchPhrase +"</td>";
                str +=   "<td>"+ data[i].company.bs +"</td>";
                str += "</tr>";
                }
                
                document.getElementById('tbody').innerHTML = str;
                })
            .catch(error => console.log('error', error));
    }

    // Fetch API Call
    useEffect(() => {
        // viewDataApi()
        if (props.show) {
            viewDataApi();
        }

        // console.log(props)
    },[props.show])
    
    // JSX
    return(
        <div>

            <div>
                <h1>Child 1</h1>
            </div>
            
            {props.show?
                <table style={{width: "95%"}}>
                    <tr>
    
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th colspan="6">Address</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th colspan="3">Company</th>
                    </tr>
    
                    <tbody id="tbody">
    
                    </tbody>
                        
                </table>
                : 
                null      
            }
        </div>
    )
}

export default Child;


