import logo from '/Wamp/www/Projects/UI_Devlopment/react_app/landing_page/src/img/pockemon_logo.png';


const Logo = () =>{
    return(
        <a class="navbar-brand" href="#">
                <img src={logo} alt=""/>
            </a>
    );
}
export default Logo;