export default function Card(prompt) {
    return (
        <div className="col-lg-4 col-sm-6 my-3">
            <div className="card d-flex align-items-center " style={{ "max-width": "18rem" }}>
                <img className="p-4"  style={{"maxWidth":"100%", "maxHeight":"200px"}} src={prompt.img}
                    alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{prompt.position}</h5>
                    <h6 className="card-subtitle">{prompt.event}</h6>
                    <p className="card-text mt-2">{prompt.description}</p>
                </div>
            </div>
        </div>
    )
}