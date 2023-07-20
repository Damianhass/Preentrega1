import CartWiget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
        <h3>Playzone</h3>
        <div>
            <button>Celulares</button>
            <button>Consolas</button>
            <button>Accesorios</button>
        </div>
        <CartWiget />
    </nav>
    )
}

export default NavBar