import start from '../img/pokemon_start.jpg';
import pki from '../img/Pokemon1.jpg';
import pkii from '../img/Pokemon2.jpg';
import pkiii from '../img/Pockemon3.jpg';


const Slider = () =>{
    return(
    <div id="carouselExampleSlidesOnly " class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner mt-5">
            <div class="carousel-item active ">
                <img src={start} class="d-block w-100" alt="..."/>
                <div class="carousel-caption text-black d-none d-md-block fs-5 fw-bold">
                    <h5 class="border-bottom border-primary border-5 fw-bold ">Welcome To the Pokemon World</h5>
                    <p>We’re glad you’re here! We’re striving to be the best resource about the Pokémon World on the
                        net, so we cover all aspects of Nintendo’s smash hit. Whatever knowledge you have—whether it’s
                        about the anime, card game, video game or movies—everything is welcome here..</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={pki} class="d-block w-100" alt="..."/>
                <div class="carousel-caption text-black d-none d-md-block fs-5 fw-bold">
                    <h5 class="border-bottom border-primary border-5 fw-bold">Pokemon starting</h5>
                    <p>"Pokémon - I Choose You!" (ポケモン！ きみにきめた！, Pokemon! Kimi ni Kimeta!) is the first episode of the
                        Pokémon anime series. It was first broadcast on April 1, 1997 on TV Tokyo.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={pkii} class="d-block w-100" alt="..."/>
                <div class="carousel-caption text-black d-none d-md-block fs-5 fw-bold">
                    <h5 class="border-bottom border-primary border-5 fw-bold">Ash Ketchum</h5>
                    <p>Ash Ketchum, a new Trainer from Pallet Town, travels with his starting Pokémon, Pikachu, with the
                        goal of becoming the Pokémon Champion. His opponent, Gary Oak, however, stands in his way and
                        disparages him at every chance..</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={pkiii} class="d-block w-100" alt="..."/>
                <div class="carousel-caption text-black d-none d-md-block fs-5 fw-bold">
                    <h5 class="border-bottom border-primary border-5 fw-bold">Ash Journey</h5>
                    <p>Ash travels around the Kanto region with Misty, Gym Leader of Cerulean City, who wants to become
                        a Water Pokémon Master, and Brock, Gym Leader of Pewter City, who wants to become a Pokémon
                        Breeder, while being pursued by the Team Rocket Trio - Jessie, James, and Meowth. He captures a
                        large number of Pokémon and challenges the Gym Leaders—Brock, Misty, Lt. Surge, Erika, Sabrina,
                        Koga, and Blaine.</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Slider;