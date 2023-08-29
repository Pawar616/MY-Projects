import Pika from '../../img/pikachu.jpg';

const Pikachu = () =>{
    return(
    <div class="container mt-5 mb-5 position-relative">
            <div
                class="col-sm-9 me-auto bg-white border border-warning pt-5 pe-5 border-5 rounded-start rounded-5 text-primary">
                <h2 class="fw-bold text-center border-bottom border-5 border-warning m-5 rounded-end rounded-5">
                    PIKACHU</h2>
                <p class="ms-1 me-5 ps-1 pe-5 fs-4">
                    Pikachu is a fictional species in the Pokémon media franchise. Designed by Atsuko Nishida and Ken
                    Sugimori, Pikachu first appeared in the 1996 Japanese video games Pokémon Red and Green created by
                    Game Freak and Nintendo, which were released outside of Japan in 1998 as Pokémon Red and Blue.
                    Pikachu is a yellow, mouse-like creature with electrical abilities. It is a major character in the
                    Pokémon franchise, serving as its mascot and as a major mascot for Nintendo. <br/>
                    Pikachu is widely considered to be the most popular and well-known Pokémon species, largely due to
                    its appearance in the Pokémon anime television series as the companion of protagonist Ash Ketchum
                </p>
            </div>

            <div>
                <img class=" ash col-sm-4 me-auto position-absolute top-50 end-0 translate-middle-y rounded-end rounded-5 border-warning border border-5"
                    src={Pika} alt=""/>
            </div>
        </div>
    );
}
export default Pikachu;