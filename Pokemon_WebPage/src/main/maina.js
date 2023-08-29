import Logo from "./logo";
import Welcome from "./section1/section_welcom";
import Pikachu from "./section2/section_pikachu";
import Ash from "./section3/section_ash";
import Cards from "./cards/cards";
const Maina = () =>{
    return (
    <div class="bg-primary">
    <Logo />
    <Welcome />
    <Pikachu />
    <Ash />
    <Cards />
    </div>
    );
}
export default Maina;    