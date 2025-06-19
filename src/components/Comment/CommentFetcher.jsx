import { useState, useEffect, useRef } from 'react';
import CommentHandler from '../Comment/CommentFormat';

function CommentFetcher() {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(2);
    const loaderRef = useRef(null);

    useEffect(() => {
        const url = `https://dummyjson.com/posts/`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts || []);
                setVisiblePosts(2);
                console.log("API Response:", data.posts);
            });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisiblePosts((prev) => {
                const next = prev + 2;
                return posts ? Math.min(next, posts.length) : prev;
            });
            }
        },
        {
            root: null,
            rootMargin: '100px',
            threshold: 1.0,
        }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    
    return () => {
        if (loaderRef.current) observer.disconnect();
        };
    }, [posts]);

    return (
    <div>
        {posts.length > 0 ? (
        <>
        {posts.slice(0, visiblePosts).map((post) => (
        <CommentHandler key = {post.id} post={post} />
        ))}
            <div ref={loaderRef} />
        </>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
}

export default CommentFetcher;