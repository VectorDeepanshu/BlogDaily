import { FullBlog } from '../components/FullBlog.tsx';
import { useBlog } from '../hooks/index.ts';
import { useParams } from 'react-router-dom';
import { FullBlogSkeleton } from '../components/BlogSkeleton.tsx';
import { AppBar } from '../components/AppBar.tsx';

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || "",
    });

    if(loading){
        return <div>
            <AppBar Authorname={"Anonymous"}></AppBar>
            <FullBlogSkeleton/>
        </div>
    }

    if (!blog) {
        return <div>
            Blog not found
        </div>
    }

    return <div>
        <FullBlog blog={blog}/>
    </div>
}