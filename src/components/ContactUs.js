import Users from "../assets/Users.png"

const Contact = ()=>{
    return(
        <div className="contact-us">
            <div id="image"><img src={Users}  id="user-img" alt="user" /></div>
            <div><h1>Contact us</h1></div>
            <p id="explaination">Contact us for detailed information about our solutions, services and products.</p>
            <p id="button">Contact us</p>
        </div>
    )
}

export default Contact;