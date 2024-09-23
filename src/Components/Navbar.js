import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <Link to={'/'}>
            <div className="relative">
                <div className="p-2 text-white bg-gray-800 sticky font-bold">
                    WoodCheck
                </div>
            </div>
        </Link>
    )
}

export default Navbar