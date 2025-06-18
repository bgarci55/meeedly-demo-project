import { useState, useEffect } from 'react';
import CommentHandler from '../Comment/CommentFormat';

function CommentFetcher() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 150) + 1;
        const url = `https://dummyjson.com/posts/${randomId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                console.log("API Response:", data);
            });
    }, []);

    return (
    <div>
        {post ? <CommentHandler post={post} /> : <p>Loading...</p> }
    </div>
    );
}

export default CommentFetcher;