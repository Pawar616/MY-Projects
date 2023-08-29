const Home = ()=>{
    return(
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-warning " href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Store</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-warning " href="#" role="button"
                            data-bs-toggle="dropdown">
                            Pokedex
                        </a>
                        <ul class="dropdown-menu fs-1 ">
                            <li><a class="dropdown-item" href="#">Anime</a></li>
                            <li><a class="dropdown-item" href="#">Movies</a></li>
                            <li><a class="dropdown-item" href="#">Pokemons</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-warning" href="#">Pokemon Tv</a>
                    </li>
                </ul>
    );
}
export default Home;