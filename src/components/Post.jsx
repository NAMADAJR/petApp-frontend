import React, { useState } from 'react';
import './Post.css'; // CSS file for styling

const Post = ({ initialPost, onUpdate }) => {
    const [post, setPost] = useState(initialPost);

    const handleUpdate = (data) => {
        const updatedPost = {
            ...post,
            title: data.get('title') || post.title,
            description: data.get('description') || post.description,
            comment: data.get('comment') || post.comment,
            picture: data.get('picture') || post.picture,
            gif: data.get('gif') || post.gif,
            emoji: data.get('emoji') || post.emoji,
            updated_at: new Date().toISOString(), // Update the timestamp
        };
        
        setPost(updatedPost);
        onUpdate(updatedPost); // Call the parent update function
    };

    return (
        <div className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            {post.picture && <img src={post.picture} alt="Post" className="post-image" />}
            <div className="post-footer">
                <p>{post.likes} Likes</p>
                <button className="like-button" onClick={() => onUpdate(post.id)}>Like</button>
            </div>
        </div>
    );
};

export default Post;