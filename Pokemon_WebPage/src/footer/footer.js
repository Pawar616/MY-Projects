import Comp from "./section_company/comp";
import Contact from "./section_contacts/contavt";
import Copy from "./section_copyright/copyright";
const Foot =() =>{
    return(
    <div class="bg-warning w-100 pe-5 row">
        <div class="col"></div>
        <Comp />
        <Contact />
        <Copy />
        <div class="col"></div>
    </div>
    );

}
export default Foot;