import { useEffect, useState } from "react";
import axios from "axios";

const DecMoviesList = () => {
  const [newmovies, setnewmovies] = useState([]);
  const [newapimovies, setnewapimovies] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3000/movies')
      .then(function (response) {
        // setnewmovies(response.data)

        setnewapimovies(response.data)
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);
  // dependancy array []
  console.log(newapimovies);

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

  const print = () => {
    const cast = document.getElementById("cast").textContent;
    const Derector = document.getElementById("Derector").textContent;
    const Budget = document.getElementById("Budget").textContent;
    const info = document.getElementById("info").textContent;
    const img = document.getElementById("img").src;

    document.getElementById("pc").innerHTML = "Cast:" + cast;
    document.getElementById("pd").innerHTML = "Derector:" + Derector;
    document.getElementById("pb").innerHTML = "Budget:" + Budget;
    document.getElementById("pi").innerHTML = "Info:" + info;
    document.getElementById("pimg").src = img;



  }

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
        {newmovies.map((obj, index) => (
          <div class="card my-3 border border-5 border-warning ">
            <img id="img" src={obj.img} class="card-img-top" alt="..." />
            <div className="">
              <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                <p id="info" class="card-text card_head d-none"> {obj.info} </p>
              </div>
              <div></div>

              <span class="position-absolute top-0 start-50 translate-middle p-2 bg-warning    ">
                <span class="">{obj.imdb}&#9734;</span>
              </span>
              <div className="ms-2">
                <h6 className="d-none" id="cast" >{obj.cast}</h6>
                <h6 className="d-none" id="Derector" >{obj.Director}</h6>
                <h6 className="d-none" id="Budget" >{obj.Budget}</h6>
              </div>
              <div class="card-body ">
                {/* <a href="#" class="btn btn-warning">
                  BUY {obj.price}{" "}
                </a> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={print}>
                  BUY {obj.price}
                </button>
                <span className="ms-3">{obj.Date}</span>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body row">
                    <div className="col-6">
                      <img id="pimg" src="" class="popimg" alt="..." />

                    </div>
                    <div className="col-6">
                      <h6 id="pc"></h6>
                      <h6 id="pd"></h6>
                      <h6 id="pb"></h6>
                      <p id="pi"></p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default DecMoviesList;
