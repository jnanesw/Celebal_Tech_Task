import Document from "../assets/Document.png"
import Star from "../assets/Star.png"
import Crown from "../assets/Crown.png"
import Graph from "../assets/Graph.png"
import ChartPieSlice from "../assets/ChartPieSlice.png"
import FigmaLogo from "../assets/FigmaLogo.png"
const Services = ()=>{
    return(
        <div className="services">
            <div id="about">
                <h1 id="heading">Quality and Process Management</h1>
                <p id="about-text">
                We provide Project Management, Business Analysis and Test Management services with our expert staff who have gained experience in different sectors so that our customers can maintain their high quality levels.
                </p>
            </div>
            <div id="services-list">
                <div id="list1">
                    <span id="list">
                        <img src={Document} id="image" alt="Logo" />
                        <h2 id="inside-head">Document Analysis</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>

                    <span id="list">
                        <img src={Star} id="image" alt="Logo" />
                        <h2 id="inside-head">Kabul ve Değerlendirme</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>

                    <span id="list">
                        <img src={Crown} id="image" alt="Logo" />
                        <h2 id="inside-head">İş Kuralları Analysis</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>
                </div>
                <div id="list2">
                    <span id="list">
                        <img src={Graph} id="image" alt="Logo" />
                        <h2 id="inside-head">Akış Diyagramları</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>

                    <span id="list">
                        <img src={ChartPieSlice} id="image" alt="Logo" />
                        <h2 id="inside-head">Paydaş Analysis</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>

                    <span id="list">
                        <img src={FigmaLogo} id="image" alt="Logo" />
                        <h2 id="inside-head">Prototype</h2>
                        <p id="inside-text">Ante vulputate ut accumsan et But time flies, old age is important, an element.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Services;