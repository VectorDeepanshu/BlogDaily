import { AppBar } from "../components/AppBar";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen">
        <AppBar Authorname="U"/>
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Publish Your Blog</h1>
            <form className="space-y-4 ">

                <input onChange={(e) =>
                    setTitle(e.target.value)
                } type="text" placeholder="Title" className="focus:outline-none bg-slate-200 w-full p-2 border border-gray-300 rounded hover:border-blue-500" />

                <textarea onChange={(e) =>
                    setDescription(e.target.value)
                } placeholder="Content" className="focus:outline-none bg-slate-200 w-full p-2 border rounded h-64 hover:border-blue-500 border-gray-300"></textarea>

            </form>
        </div>
        <div className="flex justify-center">
            <button onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content: description
                }, {
                    headers:{
                        Authorization: localStorage.getItem("jwt")
                    }
                })
                navigate(`/blog/${response.data.id}`);
            }} type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded cursor-pointer">Publish</button>
        </div>
    </div>;
}
