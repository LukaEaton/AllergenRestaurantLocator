import '../styles/Card.css'

function Card({ name, address, phone, url }){
    return (
        <>
            <div className="card">
                <ul>
                    <li>{name}</li>
                    <li>{address}</li>
                    <li>{phone}</li>
                    <li><a href={url} target='_blank'>{url}</a></li>
                </ul>
            </div>
        </>
    )
}

export default Card