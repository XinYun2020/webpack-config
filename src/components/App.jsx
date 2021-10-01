import "../styles/index.scss";
import Recipes from "./Recipes";
import certificate from "../images/mcsa_it_certificate.jpg";


const App = () => {
    return (
        < >
            <section className = "hero"></section>
            <main>
                <section>
                    <h1>Monash Chinese Student Association</h1>
                </section>
                <img src={certificate} alt="certificate" width= "500"/>
                <Recipes />
            </main>
            {/* <section className = "hero"></section> */}

            
        </>
    )
}

export default App