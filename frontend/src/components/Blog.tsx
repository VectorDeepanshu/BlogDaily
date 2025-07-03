import {Link} from "react-router-dom";

interface BlogProps {
    id: string,
    Authorname: string,
    Date: string,
    Title: string,
    Content: string
}

export const Blog = ({ Authorname, Date, Title, Content, id}: BlogProps) => {
    return <Link to={`/blog/${id}`}>
         <div className="border-b border-gray-200 pb-4 pt-3 p-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar Authorname={Authorname}/>
            
            </div>
            

            <div className="pl-2  text- text-md flex justify-center flex-col ">
                {Authorname}
            </div>
            <div className="flex justify-center flex-col pl-2 pr-2">
                <div className="rounded-full bg-gray-400 w-1 h-1 ">
                </div>
            </div>
            
            <div className="flex justify-center flex-col text-slate-500 pb-0.25 text-sm">
                {Date}
            </div>
        </div>
        <div className="font-bold text-2xl pt-2 ">
            <h1>{Title}</h1>
        </div>
        <div className="text-slate-900 text-md pt-1">
            {Content.slice(0,300)+"..."}
        </div>
        <div className="font-thin text-slate-500 text-md pt-4">
            {Math.ceil(Content.length/100)} minute(s) read
        </div>
        </div>
    </Link>
}

export const Avatar = ({Authorname, size=6} : {Authorname: string, size?: number}) => {
    return <div className={`text-sm relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 text-slate-100 `} >{Authorname[0].toUpperCase()}
    </div>
}