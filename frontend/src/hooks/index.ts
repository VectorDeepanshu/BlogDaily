import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

export interface BlogProp {
    id: string,
    title : string,
    content: string,
    author : {
        name: string
    }
}

export const useBlog = ({id} : {id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogProp>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: localStorage.getItem("jwt")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blog:", error);
                setLoading(false);
            });
    }, []);

    return { loading, blog };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogProp[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: localStorage.getItem("jwt")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);

    return { loading, blogs };
}