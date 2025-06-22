import { useState, useEffect, useRef } from 'react';
import CommentHandler from '../Comment/CommentFormat';

function CommentFetcher() {
    const posts = [{
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
        "history",
        "american",
        "crime"
        ],
        "reactions": [
        {
            "user_id": 1,
            "reaction": null
        },
        {
            "user_id": 12,
            "reaction": true
        },
        {
            "user_id": 13,
            "reaction": false
        },
        {
            "user_id": 14,
            "reaction": null
        }
        ],
        "views": 305,
        "userId": 121,
        "userName": "Bryan"
    },
    {
        "id": 2,
        "title": "His father had always taught him",
        "body": "His father had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
        "history",
        "american",
        "crime"
        ],
        "reactions": [
        {
            "user_id": 1,
            "reaction": true
        },
        {
            "user_id": 12,
            "reaction": true
        },
        {
            "user_id": 13,
            "reaction": false
        }
        ],
        "views": 400,
        "userId": 122,
        "userName": "Rylan"
    },
    {
        "id": 3,
        "title": "His father had always taught him",
        "body": "His father had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
        "history",
        "american",
        "crime"
        ],
        "reactions": [
        {
            "user_id": 12,
            "reaction": true
        },
        {
            "user_id": 13,
            "reaction": false
        }
        ],
        "views": 400,
        "userId": 122,
        "userName": "Rylan"
    }]
    // const [posts, setPosts] = useState([]);
    // const [visiblePosts, setVisiblePosts] = useState(2);
    // const loaderRef = useRef(null);

    // useEffect(() => {
    //     const url = `https://dummyjson.com/posts/`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPosts(data.posts || []);
    //             setVisiblePosts(2);
    //             console.log("API Response:", data.posts);
    //         });
    // }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //     ([entry]) => {
    //         if (entry.isIntersecting) {
    //         setVisiblePosts((prev) => {
    //             const next = prev + 2;
    //             return posts ? Math.min(next, posts.length) : prev;
    //         });
    //         }
    //     },
    //     {
    //         root: null,
    //         rootMargin: '100px',
    //         threshold: 1.0,
    //     }
    // );

    // if (loaderRef.current) observer.observe(loaderRef.current);
    
    // return () => {
    //     if (loaderRef.current) observer.disconnect();
    //     };
    // }, [posts]);

    return (
        <>
            {
                posts.map(({id, title, body, reactions}) => {
                    return (
                        <CommentHandler key = {id} title = {title} body = {body} reactionsObject = {reactions} />
                    )
                })
            }
        </>
    );
}

export default CommentFetcher;