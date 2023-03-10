import React from 'react'
import { useParams } from 'react-router-dom'
import { songLists } from '../utils/dummyData';

const CardDetail = () => {
    const paramsId = useParams();
    const id = Number(paramsId.id) -1

    console.log(id)
    console.log(songLists[id])
  return (
    <div className='bg-white'>
        <div>{songLists[id].nameSong}</div> 
        <img src={songLists[id].image} alt="" />
    </div>
  )
}

export default CardDetail