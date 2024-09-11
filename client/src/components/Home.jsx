import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import '../styles/Home.css'
import Card from './Card'
import SyncLoader from 'react-spinners/SyncLoader'

function Home(){
    const [location, setLocation] = useState('');
    const [radius, setRadius] = useState(10);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleClick(area, distance) {
        setLoading(true);
        if(area != '' && distance != ''){
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/search?location='+area+'?radius='+distance);
            xhr.onload = function() {
              if (xhr.status === 200) {
                var data = JSON.parse(JSON.parse(xhr.response));
                setResults(data);
                setLoading(false);
              }
            };
            xhr.send();
        }
    }

    return (
        <>
            <div className="page">
                <div className="restaurant-search">
                    <div className="search-criteria">
                        <div className="location-box">
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
                        </div>
                        <div className="radius-box">
                            <div className="outlined-floating-label-input">
                                <input 
                                    type="number" 
                                    id="input" 
                                    value={radius} 
                                    onChange={(e)=>setRadius(e.target.value)}
                                    required
                                ></input>
                                <label htmlFor="input">Radius (miles)</label>
                            </div>
                        </div>
                        <button className="search-button" onClick={()=>handleClick(location, radius)}><FaSearch className="search-icon" />Search</button>
                    </div>
                    {
                        loading ? 

                            <SyncLoader
                                className="loading"
                                size={20}
                                color={"rgb(34, 34, 34)"}
                                loading={loading}
                            />

                        :

                            <div className="search-results">
                            {results.map( (data) => (
                                <Card 
                                    name={data.name} 
                                    address={data.address} 
                                    phone={data.phone}
                                    url={data.url}
                                />
                            ) )}
                            </div>

                    }
                </div>
                
            </div>
        </>
    )
}

export default Home