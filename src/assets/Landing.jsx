import niloy from "../images/niloy.png"
import waves from "../images/waves.svg"

export default function Landing() {
    return (
            <section class="bg-dark text-white text-center text-sm-start">
                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-around pt-5">
                        <div class="col-md-6">
                            <h1>Become a <span class="text-warning">Pro</span> in Chemistry</h1>
                            <d class="float-end">with <h4 class="d-inline text-warning">Niloy Kumar Mondal</h4>
                            </d>
                            <p class="lead mt-5">Learn from one of the toppers in Bangladesh with multiple <i><b>international</b></i> recognitions in the field of chemistry.</p>
                            <div class="">
                                <button class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll
                                    Now</button>
                            </div>
                        </div>
                        <div class="">
                            <img src={niloy} class="img-fluid"  />
                        </div>
                    </div>
                </div>
                <img src={waves} alt="" width="100%" style={{ 'transform': 'rotate(180Deg)' }} />
            </section>
    )
}