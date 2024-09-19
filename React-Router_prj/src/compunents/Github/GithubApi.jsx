import React, { useEffect, useState } from 'react'

function GithubApi() {
    const [data , setData] = useState([]);
    useEffect(() => {
      fetch('https://api.github.com/users/IsharWeb')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        
        setData(data)
      })
    }, [])
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.login}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
      )
}

export default GithubApi