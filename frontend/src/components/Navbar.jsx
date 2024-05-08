

function Navbar(){

    return(
        <div>
            <nav className="d-flex w-100 bg-dark text-white position-fixed z-3 px-5">
                <a className="mr-3">
                    <h1>
                    <ion-icon name="fast-food-outline"></ion-icon>
                    Babaji ka Rolls :)
                    </h1>
                </a>
                <div className="d-flex w-100 align-items-center">
                    <div className="d-flex flex-row ml-auto">
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>SERVICES</a>
                        <a>MENU</a>
                        <div>
                            <a>Pages</a>
                            <div className="d-none">
                                <a>Booking</a>
                                <a>Our Team</a>
                                <a>Testimonial</a>
                            </div>
                        </div>
                        <a>CONTACT</a>                   
                    </div>
                    <a>BOOK A TABLE NOW!</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar