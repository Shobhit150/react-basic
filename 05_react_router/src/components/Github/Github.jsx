import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const githubData = useLoaderData()
    // const [githubData, setGithubData] = useState([])
    // useEffect(() => {
    //     (async () => {
    //         const data = await fetch("https://api.github.com/users/Shobhit150")
    //         const res = await data.json()
    //         setGithubData(res)

    //     })()
      
    // }, [])
    
  return (
    <div className=' text-center m-4 bg-gray-700 text-white text-3xl'>
        Github followers : {githubData.followers}
        <img src={githubData.avatar_url} alt='Git pictures' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const data = await fetch("https://api.github.com/users/Shobhit150")
    const res = await data.json()
    return res
}