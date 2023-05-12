import Accordion from 'react-bootstrap/Accordion';
import WhatData from './WhatData';

export default function What() {
    return (
        <div>
            <section id="what" className="p-3 pb-5 bg-dark text-white">
                <div className="container">
                    <h1 className="my-3 mb-5">What you'll Learn</h1>
                    <div className="lead my-5">This course is designed to be most effective for the students of HSC batch '22 and '23 for
                        their HSC exam and admission test but others with reasonable background are also encouraged to enroll!!
                    </div>
                    <h3>Below are the topics that the classes will cover</h3>
                    <Accordion defaultActiveKey={0}> {WhatData.map((data, index) =>
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                Lecture #{index + 1}
                            </Accordion.Header>
                            <Accordion.Body>
                                {data.body}
                            </Accordion.Body>
                        </Accordion.Item>)}
                    </Accordion>
                </div>
            </section>
        </div>
    )
}