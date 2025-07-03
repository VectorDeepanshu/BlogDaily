import { Avatar } from "./Blog"
import { Link } from "react-router-dom";

export const AppBar = ({ Authorname }: { Authorname: string }) => {
    return <div className="bg-black border-b border-gray-200 flex justify-between px-10 py-3">
        <Link to="/blogs" className="flex flex-col justify-center font-bold cursor-pointer text-white">
            BlogDaily
        </Link>

        <div>
            <Link to="/publish" className="pr-2">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2 text-center me-2 mb-2">New</button>

            </Link>

            <Avatar Authorname={Authorname} size={10} />
        </div>
    </div>
}
