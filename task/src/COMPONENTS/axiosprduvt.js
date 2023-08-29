import { useEffect, useState } from "react";
import axios from "axios";
// const movies = [
//     {
//         name: "Iron Man",
//         price: "$10",
//         img: "./Images/mcu1.jpg",
//         info: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
//         imdb: "7.9/10",
//         Date: "1 May 2008",
//         Director: "Jon Favreau",
//         Budget: "14 crores USD",
//         cast: "Robert Dowaney jr",
//     },
//     {
//         name: "The Incredible Hulk",
//         price: "$10",
//         img: "./Images/mcu2.jpg",
//         info: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.",
//         imdb: "7/10",
//         Date: "20 June 2008",
//         Director: "Louis Leterrier",
//         Budget: "15 crores USD",
//         cast: "Edward Norton",
//     },
//     {
//         name: "Iron Man 2",
//         price: "$10",
//         img: "./Images/mcu3.jpg",
//         info: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
//         imdb: "6.9/10",
//         Date: "7 May 2010",
//         Director: "Jon Favreau",
//         Budget: "20 crores USD",
//         cast: "Robert Dowaney jr",
//     },
//     {
//         name: "Thor",
//         price: "$10",
//         img: "./Images/mcu4.jpg",
//         info: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
//         imdb: "7/10",
//         Date: "29 April 2011",
//         Director: " Kenneth Branagh",
//         Budget: "15 crores USD",
//         cast: "Chris Hemsworth",
//     },
//     {
//         name: "Captain America: The First Avenger",
//         price: "$10",
//         img: "./Images/mcu5.jpg",
//         info: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
//         imdb: "7.7/10",
//         Date: "29 July 2011",
//         Director: " Joe Johnston",
//         Budget: "14 crores USD",
//         cast: "Chris Evans",
//     },
//     {
//         name: "The Avengers",
//         price: "$10",
//         img: "./Images/mcu6.jpg",
//         info: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
//         imdb: "6.6/10",
//         Date: " 27 April 2012",
//         Director: "Joss Whedon",
//         Budget: "22 crores USD",
//         cast: "Robert Downy Jr, Chris Evans",
//     },
//     {
//         name: "Iron Man 3",
//         price: "$10",
//         img: "./Images/mcu7.jpg",
//         info: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.",
//         imdb: "7.1/10",
//         Date: " 26 April 2013",
//         Director: "Shane Black",
//         Budget: "20 crores USD",
//         cast: "Robert Downy Jr",
//     },
//     {
//         name: "Thor: The Dark World",
//         price: "$10",
//         img: "./Images/mcu8.jpg",
//         info: "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.",
//         imdb: "6.6/10",
//         Date: "8 November 2013",
//         Director: "Alan Taylor",
//         Budget: "18 crores USD",
//         cast: "Chris Hemsworth",
//     },
//     {
//         name: "Captain America: The Winter Soldier",
//         price: "$10",
//         img: "./Images/mcu9.jpg",
//         info: "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
//         imdb: "7.4/10",
//         Date: "4 April 2014 ",
//         Director: "Joo Russo and Anthony Russo",
//         Budget: "17 crores USD",
//         cast: "Chris Evans",
//     },
//     {
//         name: "Guardians of the Galaxy",
//         price: "$10",
//         img: "./Images/mcu10.jpg",
//         info: "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.",
//         imdb: "8/10",
//         Date: " 8 August 2014 ",
//         Director: "James Gunn",
//         Budget: "17 crores USD",
//         cast: "Chris Pratt",
//     },
//     {
//         name: "Avengers: Age of Ultron",
//         price: "$10",
//         img: "./Images/mcu11.jpg",
//         info: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
//         imdb: "7.1/10",
//         Date: " 24 April 2015 ",
//         Director: "Joss Whedon",
//         Budget: "36.5 crores USD",
//         cast: "Chris Evans, Robert Downy Jr",
//     },
//     {
//         name: "Ant-Man",
//         price: "$10",
//         img: "./Images/mcu12.jpg",
//         info: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
//         imdb: "7.3/10",
//         Date: " 24 July 2015 ",
//         Director: "Peyton Reed",
//         Budget: "13 crores USD",
//         cast: "Poul Rudd",
//     },
//     {
//         name: "Captain America: Civil War",
//         price: "$10",
//         img: "./Images/mcu13.jpg",
//         info: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it.",
//         imdb: "6.4/10",
//         Date: "  6 May 2016 ",
//         Director: "Anthony Russo",
//         Budget: "25 crores USD",
//         cast: "Chris Evans, Robert Downy Jr",
//     },
//     {
//         name: "Doctor Strange",
//         price: "$10",
//         img: "./Images/mcu14.jpg",
//         info: "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",
//         imdb: "7.5/10",
//         Date: " 4 November 2016 ",
//         Director: "Scott Derrickson",
//         Budget: "23 crores USD",
//         cast: "Benedict Cumberbatch",
//     },
//     {
//         name: "Guardians of the Galaxy Vol. 2",
//         price: "$10",
//         img: "./Images/mcu15.jpg",
//         info: "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.",
//         imdb: "7.6/10",
//         Date: "5 May 2017 ",
//         Director: "James Gunn",
//         Budget: "20 crores USD",
//         cast: "Chris Pratt",
//     },
//     {
//         name: "Spider-Man: Homecoming",
//         price: "$10",
//         img: "./Images/mcu16.jpeg",
//         info: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
//         imdb: "7.3/10",
//         Date: "7 July 2017",
//         Director: "Jon Watts",
//         Budget: "17.5 crores USD",
//         cast: "Tom Holland",
//     },
//     {
//         name: "Thor: Ragnarok",
//         price: "$10",
//         img: "./Images/mcu17.jpeg",
//         info: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
//         imdb: "7.9/10",
//         Date: "3 November 2017",
//         Director: "Taika Waititi",
//         Budget: "18 crores USD",
//         cast: "Chris Hemsworth",
//     },
//     {
//         name: "Black Panther",
//         price: "$10",
//         img: "./Images/mcu18.jpeg",
//         info: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
//         imdb: "7.3/10",
//         Date: "14 February 2018",
//         Director: "Ryan Coogler",
//         Budget: "20 crores USD",
//         cast: "Chadwick Boseman",
//     },
//     {
//         name: "Avengers Infinity War",
//         price: "$10",
//         img: "./Images/mcu19.jpeg",
//         info: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
//         imdb: "8.4/10",
//         Date: "27 April 2018",
//         Director: "Anthony Russo, Joe Russo",
//         Budget: "31.6 crores USD",
//         cast: "Chris Evans, Robert Downy Jr",
//     },
//     {
//         name: "Ant-Man and the Wasp",
//         price: "$10",
//         img: "./Images/mcu20.jpg",
//         info: "Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.",
//         imdb: "6.1/10",
//         Date: "6 July 2018",
//         Director: "Peyton Reed",
//         Budget: "23 crores USD",
//         cast: "Poul Rudd",
//     },
//     {
//         name: "Captain Marvel",
//         price: "$10",
//         img: "./Images/mcu21.jpeg",
//         info: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.",
//         imdb: "6.8/10",
//         Date: "8 March 2019",
//         Director: "Anna Boden, Ryan Fleck",
//         Budget: "15.2 crores USD",
//         cast: "Brie Larson",
//     },
//     {
//         name: "Avengers Endgame",
//         price: "$10",
//         img: "./Images/mcu22.jpeg",
//         info: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
//         imdb: "8.4/10",
//         Date: "26 April 2019",
//         Director: "Anthony Russo, Joe Russo",
//         Budget: "35.6 crores USD",
//         cast: "Chris Evans, Robert Downy Jr",
//     },
//     {
//         name: "Spider-Man: Far From Home",
//         price: "$10",
//         img: "./Images/mcu23.jpeg",
//         info: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
//         imdb: "7.4/10",
//         Date: "2 July 2019 ",
//         Director: "Jon Watts",
//         Budget: "16 crores USD",
//         cast: "Tom Holland",
//     },
//     {
//         name: "Black Widow",
//         price: "$10",
//         img: "./Images/mcu24.jpeg",
//         info: "Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises.",
//         imdb: "6.7/10",
//         Date: "9 July 2021",
//         Director: "Cate Shortland",
//         Budget: "20 crores USD",
//         cast: "Scarlett Johansson",
//     },
//     {
//         name: "Shang-Chi and the Legend of the Ten Rings",
//         price: "$10",
//         img: "./Images/mcu25.jpeg",
//         info: "Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.",
//         imdb: "8.4/10",
//         Date: "2 September 2021 ",
//         Director: "Destin Daniel Cretton",
//         Budget: "15 crores USD",
//         cast: "Simu Liu",
//     },
//     {
//         name: "Eternals",
//         price: "$10",
//         img: "./Images/mcu26.jpeg",
//         info: "The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.",
//         imdb: "7.4/10",
//         Date: "5 November 2021",
//         Director: "Chloé Zhao",
//         Budget: "23.62 crores USD",
//         cast: "Richard Madden",
//     },
//     {
//         name: "Spider-Man: No Way Home",
//         price: "$10",
//         img: "./Images/mcu27.jpeg",
//         info: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
//         imdb: "8.2/10",
//         Date: "17 December 2021",
//         Director: "Jon Watts",
//         Budget: "20 crores USD",
//         cast: "Tom Holland, Toby MAguaire, Andrew Garfiled",
//     },
//     {
//         name: "Doctor Strange in the Multiverse of Madness",
//         price: "$10",
//         img: "./Images/mcu28.jpeg",
//         info: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
//         imdb: "6.9/10",
//         Date: "6 May 2022",
//         Director: " Sam Raimi",
//         Budget: "29 crores USD",
//         cast: "Benedict Cumberbatch",
//     },
//     {
//         name: "Thor: Love and Thunder",
//         price: "$10",
//         img: "./Images/mcu29.jpeg",
//         info: "Thor embarks on a journey unlike anything. However, his retirement gets interrupted by Gorr the God Butcher. Together, they set out on a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance.",
//         imdb: "6.2/10",
//         Date: "6 July 2022",
//         Director: " Taika Waititi",
//         Budget: "25 crores USD",
//         cast: "Chris Hemsworth",
//     },
//     {
//         name: "Black Panther: Wakanda Forever",
//         price: "$10",
//         img: "./Images/mcu30.jpeg",
//         info: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter.",
//         imdb: "6.7/10",
//         Date: "1 November 2022",
//         Director: " Ryan Coogler",
//         Budget: "25 crores USD",
//         cast: " Letitia Wright ,Tenoch Huerta",
//     },
//     {
//         name: "The Guardians of the Galaxy Holiday Special",
//         price: "$10",
//         img: "./Images/mcu31.jpeg",
//         info: "The Guardians are on a mission to make Christmas unforgettable for Quill and head to Earth in search of the perfect present.",
//         imdb: "6.9/10",
//         Date: "1 November 2022",
//         Director: "James Gunn",
//         Budget: "unknown",
//         cast: "Chris Pratt ",
//     },
//     {
//         name: "Ant-Man and the Wasp: Quantumania",
//         price: "$10",
//         img: "./Images/mcu32.jpeg",
//         info: "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
//         imdb: "6.1/10",
//         Date: "16 February 2023",
//         Director: "Peyton Reed",
//         Budget: "20 crores USD",
//         cast: "Poul Rudd",
//     },
// ];

const MoviesList = () => {
    const [newmovies, setnewmovies] = useState([]);
    const [newapimovies, setnewapimovies] = useState([]);


    useEffect(()=>{
        axios
        .get('http://localhost:3000/movies')
        .then(function (response) {
            // setnewmovies(response.data)
            setnewapimovies(response.data)
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[]) // dependancy array []
    const movi = (movieevent) => {
        if (movieevent.target.value !== "") {
            const newList = newapimovies?.filter((product) => {
                const mname = product.name.toLocaleLowerCase();
                // const mcast = product.cast.toLocaleLowerCase();

                const searchinput = movieevent.target.value?.toLocaleLowerCase();
                if (mname.indexOf(searchinput) !== -1) {
                    return product;
                }
            });
            setnewmovies(newList);
        } else {
            setnewmovies(newapimovies);
        }
    };

    return (
        <div className="bg-danger">
            <div>
                <form class="d-flex justify-content-center py-5" role="search">
                    <input
                        class="form-control bg-warning text-danger w-75 me-2"
                        type="search"
                        onChange={movi}
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-warning">Search</button>
                </form>
            </div>
            <div className="d-flex flex-wrap justify-content-around mx-5 ">
                {newmovies.length > 0 &&
                newmovies.map((obj, index) => (
                    <div class="card my-3 border border-5 border-warning ">
                        <img src={obj.img} class="card-img-top" alt="..." />
                        <div className="">
                            <div class="card-body">
                                <h5 class="card-title">{obj.name}</h5>
                                <p class="card-text card_head"> {obj.info} </p>
                            </div>
                            <div></div>
                            
                            <span id="star" class="position-absolute top-0 start-100 translate-middle bg-warning p-4 fw-bold">
                                <span class="">{obj.imdb}</span>
                            </span>
                            <div className="ms-2">
                                <h6>Cast: {obj.cast}</h6>
                                <h6>Director: {obj.Director}</h6>
                                <h6>Budget: {obj.Budget}</h6>
                            </div>
                            <div class="card-body pb-0">
                                <a href="#" class="btn btn-warning">
                                    BUY {obj.price}{" "}
                                </a>
                                <span className="ms-3">{obj.Date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};
export default MoviesList;
