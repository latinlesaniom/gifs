import React, { useEffect, useState } from 'react';
import '../src/index.css'

function App() {
  const [keyword, setKeyword ] = useState("")
  const [giphy, setGiphy] = useState([])

   const url = `https://api.giphy.com/v1/gifs/search?api_key=IgkNzCg5BUQXQPT3bCmdAM6GHAMNVT17&q=${keyword}`


    const SearchGiphy = async () => {
        await fetch(url)
                .then(data => {return data.json()})
                .then(data => { 
                  setGiphy( data.data.map(res => {
                    return res.images.fixed_height.url
                  }))
            }) 
    }

  return (
    <>
      <div className='header'><h1>Search Gifs</h1></div>
      <div className='div'>
          <input className={'input'} type="search" onChange={e => setKeyword(e.target.value)}/>
          <button className={'btn'} onClick={SearchGiphy}>Search Gifs</button>
      </div>
      <div className='card'>
            {
              giphy.map(res => {
                return(
                  <img src={res} />
                )
              })
            }
      </div>  
    </>
  );
}

export default App;
