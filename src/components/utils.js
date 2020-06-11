import React from 'react'

const gapMaker = (gap) =>  {

    const col_5_boxCount = parseInt(gap/5)
    const rem_box = gap%5
    let col_5_container = Array(col_5_boxCount).fill().map( (data, index) => <div key={index.toString()}className='row mt-5'/>) || null
    let rem_container = <div className={`row mt-${rem_box}`}/>
    return (
    <div>{col_5_container}{rem_container}</div>
    )
}

export { gapMaker }