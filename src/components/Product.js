import Logo from "../assets/Group 8.png"

const Products = ()=>{
    return(
        <div className="products">
            <div id="List">
                <ul>
                    <h3>Solution and Services</h3>
                    <li>Software development</li>
                    <li>Outsourcing</li>
                    <li>Quality and Process Management</li>
                    <li>consultancy</li>
                    <li>IoT Supported Solutions</li>
                </ul>

                <ul>
                    <h3>Products</h3>
                    <li>Education Management System</li>
                    <li>Human Capital Management System</li>
                    <li>Customer Relationship Management System</li>
                    <li>Content Management System</li>
                </ul>

                <ul>
                    <h3>Institutional</h3>
                    <li>about us</li>
                    <li>Documents and Competencies</li>
                    <li>Work partners</li>
                </ul>

                <ul>
                    <h3>Communication</h3>
                    <li>Information Request Form</li>
                    <li>Expert Request Form</li>
                </ul>
            </div>
            <div id="footer">
                <p>© Copyright 2010-2021 - Can Çevik</p>
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Products;