import './Card.css'

const Card = ({ name , lastname ,amount, musthave , optional}) => {
    return <div className="card grow">
        <img alt='robots' src={`http://robohash.org/${name}${lastname}?set=set4&size=100x100`}/> 
        <h2>{name} {lastname}</h2>
        <hr/>
        <h4>{`Amount of slices ${amount}`}</h4>
        <div>
            {`Must have: ${musthave}` }
        </div> 
        <div>
            {optional && `Likes: ${optional}`}
        </div>
    </div>
};

export default Card;