import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Test() {
    const [usersData, setUsersData] = useState([])
    const [message, setMessage] = useState( '' );

    const fixLocation= (e) => {
        return `${e.street.number} ${e.street.name} ${e.city} ${e.state} ${e.country}`
    }


    const url = 'https://randomuser.me/api/?results=20'
    
    const fetchData = () => {
        return axios.get(url).then((res) => {
            const data = res.data.results
            console.log(data)
            return data
        }
        ).catch((err)=> {
            console.log(err)
        })
    } 
    useEffect(()=>{
   

        fetchData().then(apiPeople=>{
            setUsersData(apiPeople)
        })
    },[])

    const sortLocation = () => {
        const sorted = [...usersData].sort((a,b)=>{return a.gender > b.gender ? 1 : -1})
        setUsersData([...usersData].sort((a,b)=>{return a.gender > b.gender ? 1 : -1}))
        
    }

  

    console.log(usersData)
    return (
        <div>

<input
         type="text"
         value={message}
         placeholder="Enter a message"
         onChange={e => setMessage(e.target.value)}
       />
      <p>
        <strong>{message}</strong>
      </p>
            <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th onClick={()=>sortLocation()}>Address</th>
                            <th>gender</th>
                        </tr>
                        {usersData.map((e, i)=>
                        <tr key={i}>
                            <td>
                                {e.name.first} {e.name.last}
                            </td>
                            <td>
                                {e.email}
                            </td>
                            <td>
                                {fixLocation(e.location)}
                            </td>
                            <td>
                                {e.gender}
                            </td>
                        </tr>
                        )}
                        
                    </table>
            
        </div>
    )
}

export default Test