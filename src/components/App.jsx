import "../styles/index.scss";
import Recipes from "./Recipes";
import certificate from "../images/mcsa_it_certificate.jpg";


const App = () => {
    return (
        < >
            <section className = "hero"></section>
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
                <img src={certificate} alt="certificate" width= "250"/>
                <Recipes />
            </main>

            
        </>
    )
}

export default App