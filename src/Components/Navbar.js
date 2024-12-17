import { Link } from "react-router-dom"

export default function Navbar({ title }) {

    return (
        <Link to={'/'}>
            <div className="relative">
                <div className="p-2 text-white bg-[#9A8161] sticky font-bold">
                    {title}
                </div>
            </div>
        </Link>
    )
}