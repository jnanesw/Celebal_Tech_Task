import Logos from "../assets/Logos.png";
const Reference = ()=>{
    return(
        <div className="reference">
            <div id="reference-text">
                <h1>Our references</h1>
                <p>Our business partners who trust us and work with us.</p>
            </div>
            <img src={Logos} alt="logo" />
        </div>
    )
}

export default Reference;