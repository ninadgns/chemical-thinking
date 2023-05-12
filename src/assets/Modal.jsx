export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Cost of this course is <b>BDT 2,000</b>. You would have to pay this after a few classNamees. You can also leave
                        after a few classNamees if you want to.
                        <br></br><br></br>
                        This course will be run primarily through Telegram. Would you like to join the telegram group?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="https://t.me/niloy12101001"><button type="button" className="btn btn-primary">Join on
                            Telegram</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}