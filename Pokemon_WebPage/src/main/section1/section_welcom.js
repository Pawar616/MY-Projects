import wel from '../../img/ash.jpg';

const Welcome = () =>{
    return(
    <div class="container mt-5 mb-5 position-relative">
          
            <div>
                <img class=" ash col-sm-4 me-auto position-absolute top-50 start-0 translate-middle-y rounded-start rounded-5 border-warning border border-5"
                    src={wel} alt=""/>
            </div>
           
            <div
                class="col-sm-9 ms-auto bg-white border border-warning pt-5 ps-5 border-5 rounded-end rounded-5 text-primary">
                <h2 class="fw-bold text-center border-bottom border-5 border-warning m-5 rounded-start rounded-5">
                    WELCOME TO THE WORLD OF POKEMON!</h2>
                <p class="ms-5 ps-5 fs-4">
                    That's right it's been 25 years since Pikachu was first introduced in the world,<br/>
                    and since then the series has grown to become one of the most successful gaming franchises of all
                    time. <br/>

                    In fact, to date, more than 368 million Pokémon video games have been <br/>
                    sold worldwide! <br/>

                    From the games, to the TV series and trading cards, Pokémon has had a huge influence on the world
                    since
                    it was created. <br/>

                    We've been taking a look back at the history of Pokémon to see how it started and how much it's
                    grown in
                    25 years. <br/>

                    So, if you want to be a Pokémon Master... of knowledge... then take a look! <br/>
                </p>
            </div>
        </div>
        );
}
export default Welcome;