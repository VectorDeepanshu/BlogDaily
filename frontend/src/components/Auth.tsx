import type { SignupInput } from "@vectordeepanshu/blogdaily-common";
import { useState, type ChangeEvent } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);
            navigate("/blogs");
        }catch(e){
            alert("An error occurred while trying to sign in or sign up. Please try again.");
        }
        
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div >
                <div className="px-14 max-w-md ">
                    <div className="text-4xl font-bold flex justify-center">
                        Create an account
                    </div>
                    <div className="text-slate-400 flex justify-center">
                        {type === "signin"? "Don't have an account?" : "Already have an account?"}  
                        <a href={type === "signup"? "/signin": "/signup"} className="underline text-blue-500 pl-2">{type==="signin" ? "Sign up": "Sign in"}</a>
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ?<LabelInput label="Name" placeholder="Enter your name" onchange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />: null}
                    <LabelInput label="Email" placeholder="your@email.com" onchange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelInput label="Password" type={"password"} placeholder="Enter your password" onchange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                </div>
                <div className="flex justify-center pt-8">
                    <button onClick={sendRequest} className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-50 rounded-lg">
                        {type === "signup" ? "Sign Up" : "Sign In"}
                    </button>
                </div>
            </div>


        </div>
    </div>
}

interface LabelInputProps {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelInput({ label, placeholder, onchange, type }: LabelInputProps) {
    return <div>
        <label className="block mb-2 text-sm font-bold text-gray-900 pt-4">{label}</label>
        <input type={type || "text"} placeholder={placeholder} className="bg-gray-50  border border-slate-400 text-gray-900 text-sm rounded-lg  hover:ring-blue-500 hover:border-blue-500  block w-full p-2.5 mt-2" onChange={onchange} />
    </div>
}