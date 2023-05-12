import waves from "../images/waves.svg"
import Card from "./Card"
import WhyData from "./WhyData"

export default function Why() {
    return (
        <div>
            <section id="why" className="p-3">
                <div className="container mt-5">
                    <h1>Why Chemical Thinking</h1>
                    <p className="lead mt-5">Niloy Kumar Mondal is a phenomenal teacher in the context of admission test in Bangladesh. Achievement of Niloy includes:</p>
                    <div className="row mx-auto">{WhyData.map(why =>
                        <Card
                            img={why.img}
                            position={why.position}
                            event={why.exam}
                            description={why.description}
                        />)}
                    </div>
                </div>
            </section>
            <img src={waves} alt="" width="100%" />
        </div>
    )
}