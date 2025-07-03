import { Blog } from "./../components/Blog"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks/index.ts";
import { BlogSkeleton } from "../components/BlogSkeleton.tsx";

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    
    if(loading){
        return <div>
            <AppBar Authorname={"Anonymous"}></AppBar>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }

    if(!blogs){
        return <div>
            No blogs found
        </div>
    }
    

    return <div >
            <div>
                <AppBar Authorname={"Anonymous"}/>
            </div>
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    {blogs.map((blog) => (
                        <Blog id={blog.id} Authorname={blog.author.name || "Anonymous"} Date="3 Jul 2025" Title={blog.title} Content={blog.content}/>
                    ))}
                </div>
            </div>
    </div>
}