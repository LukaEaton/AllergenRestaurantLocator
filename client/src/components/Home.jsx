import { useState } from 'react'
import '../styles/Home.css'

function Home(){
    const [location, setLocation] = useState('');

    function handleClick(area) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/search/'+area);
        xhr.onload = function() {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
      }

    return (
        <>
            <div className="page">
                <div className="outlined-floating-label-input">
                    <input 
                        type="text" 
                        id="input" 
                        value={location} 
                        onChange={(e)=>setLocation(e.target.value)}
                        required
                    ></input>
                    <label htmlFor="input">Location</label>
                </div>
                <button onClick={()=>handleClick(location)}>Change</button>
            </div>
        </>
    )
}

export default Home