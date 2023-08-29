import Toy1 from "./toys/toys";
const Cards = () =>{
    return(
        <div class="container">
        <h2 class="text-center text-warning rounded-5 border-5 border-bottom border-warning fw-bold fs-1 m-5 pt-5">
            Pokemon Toys</h2>
    <div class="toys d-flex flex-wrap  ">


        <Toy1 />
        <Toy1 />
        <Toy1 />
        <Toy1 />
        <Toy1 />
        <Toy1 />
        <Toy1 />
        <Toy1 />
        </div>

    </div>
        );
}
export default Cards;