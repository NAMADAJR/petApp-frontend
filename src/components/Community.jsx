import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css";

export const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });

    useEffect(() => {
        // Fetch all community posts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:7500/community');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const createPost = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:7500/community', newPost);
            setPosts([...posts, { ...newPost, id: response.data.post }]); // Add the new post to the state
            setNewPost({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' }); // Reset the form
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const likePost = async (postId) => {
        try {
            await axios.post(`http://127.0.0.1:7500/community/${postId}/like`);
            setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post)); // Update the likes locally
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`http://127.0.0.1:7500/community/${postId}`);
            setPosts(posts.filter(post => post.id !== postId)); // Remove the deleted post from the state
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className="community">
            <h1>Community Posts</h1>

            <div>
                <h2>Create a New Post</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newPost.description}
                    onChange={e => setNewPost({ ...newPost, description: e.target.value })}
                />
                <button onClick={createPost}>Submit</button>
            </div>

            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.likes} Likes</p>
                        <button onClick={() => likePost(post.id)}>Like</button>
                        <button onClick={() => deletePost(post.id)} style={{ marginLeft: '10px', backgroundColor: '#dc3545' }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};