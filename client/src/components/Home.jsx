import '../styles/Home.css'

function Home(){
    return (
        <>
            <div className="page">
                <div class="outlined-floating-label-input">
                    <input type="text" id="input" placeholder=" " required></input>
                    <label for="input">Location</label>
                </div>
            </div>
        </>
    )
}

export default Home