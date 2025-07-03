import { AppBar } from "./AppBar"
import type { BlogProp } from "../hooks/index.ts";
import { Avatar } from "./Blog.tsx";

export const FullBlog = ({ blog }: { blog: BlogProp }) => {
    return <div>
        <div>
            <AppBar Authorname="LoL" />
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-15  max-w-screen-2xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold ">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-4">
                        Posted on 3rd Jul 2025
                    </div>
                    <div className="text-slate-600 pt-6">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                   
                    <div className="flex pt-3">
                        <div className="flex justify-center flex-col pr-3">
                            <Avatar size={10} Authorname={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="font-bold text-xl">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention.
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
}