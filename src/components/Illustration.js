import Illustration1 from "../assets/Illustration.jpg";
import Illustration2 from "../assets/Illustration-2.jpg";

const Illustration = ()=>{
    return(
        <div className="illustration">

            <div id="img1">
                <div id="heading">
                    <h1>Quality and Process Management</h1>
                    <p id="illustration-text">Our experienced staff; consists of experienced project managers from many different sectors, who have PMP® certification. We are with you to support the management of your projects, to strengthen the weak areas, to apply and develop the internationally valid PMI® methodology in your company.</p>
                    <p id="button">Discover</p>
                </div>
                <img src={Illustration1} id="illustration-img" alt="illustration"/>
            </div>

            <div id="img2">
                <img src={Illustration2} id="illustration-img" alt="illustration"/>
                <div id="heading">
                    <h1>Test Management and Analysis</h1>
                    <p id="illustration-text">We carefully apply the tests we carry out in order to prevent software errors in the projects we consult, manually or with test automation at every project stage. Our experienced testing team provides institutions with a high-quality software testing service and a completely safe, high-quality and satisfying customer experience.</p>
                    <p id="button">Discover</p>
                </div>
            </div>
        </div>
    )
}

export default Illustration;