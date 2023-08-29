import Ash_img from '../../img/ash_3.jpg';

const Ash = () => {
    return (
        <div class="container mt-5 mb-5 position-relative">
        <div>
            <img class=" ash col-sm-4 me-auto position-absolute top-50 start-0 translate-middle-y rounded-start rounded-5 border-warning border border-5"
                src={Ash_img} alt=""/>
        </div>
        <div
            class="col-sm-9 ms-auto bg-white border border-warning pt-5 ps-5 border-5 rounded-end rounded-5 text-primary">
            <h2 class="fw-bold text-center border-bottom border-5 border-warning m-5 rounded-start rounded-5">
                ASH KATCHU</h2>
            <p class="ms-4 ps-5 pe-1 fs-4">
                Ash Ketchum is the main protagonist of the first 25 seasons of Pokémon the Series. He is a
                10-year-old Pokémon Trainer from Pallet Town in the Kanto region who has always dreamed of becoming
                the world's best Pokémon Master. The first human character introduced in the series, he is the
                winner of the Orange League and Kanto Battle Frontier and the Alola region's Pokémon Champion,
                receiving the title after winning its first Pokémon League Conference. He is also one of the eight
                best trainers in the Pokémon World after defeating Raihan and reached Master Class in the World
                Coronation Series. Ash became the Monarch (World Champion) and became The Strongest Pokémon Trainer
                in the Pokémon World after winning The Masters Eight Tournament defeating the Previously Monarch
                Leon.
            </p>
        </div>
    </div>

        );
}
export default Ash;