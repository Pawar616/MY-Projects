import Logo from './logo/logo';
import Home from './home/home';
import Search from './search/search';
const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid">
            <Logo />
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Home />
                <Search />
            </div>
        </div>
    </nav>

    );
}

export default Header;
