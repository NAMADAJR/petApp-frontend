import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Community.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from './Navbar';

export const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    comment: '',
    picture: '',
    gif: '',
    emoji: '',
  });
  const [mostLikedPost, setMostLikedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'image', 'emoji', 'comment'
  const emojis = ['😀', '😂', '😍', '😎', '🥳', '😢', '👍', '👎', '🔥', '❤️'];

  // Fetch all posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://petapp-backend-abg7.onrender.com/community');
        setPosts(response.data);

        // Set most liked post
        const mostLiked = response.data.reduce((prev, current) => 
          current.likes > (prev.likes || 0) ? current : prev,
          {}
        );
        setMostLikedPost(mostLiked);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Handle input changes for creating a new post
  const handleChange = (field, value) => {
    setNewPost((prev) => ({ ...prev, [field]: value }));
  };

  // Create a new post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://petapp-backend-abg7.onrender.com/community', newPost);
      setPosts((prevPosts) => [...prevPosts, response.data]);
      setNewPost({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Like a post
  const likePost = async (postId) => {
    try {
      const response = await axios.post(`https://petapp-backend-abg7.onrender.com/community/${postId}/like`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likes: response.data.likes } : post
        )
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Delete a post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://petapp-backend-abg7.onrender.com/community/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="community-page">
        {/* Left section */}
        <div className="community-content">
          <div className="post-create-container">
            <div className="post-create-header">
              <input
                type="text"
                placeholder="Post Title"
                value={newPost.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
              <input
                type="text"
                placeholder="Post Description"
                value={newPost.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
            </div>
            <button onClick={createPost}>Create Post</button>
          </div>

          {/* Display posts */}
          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>Likes: {post.likes}</p>
                {post.picture && <img src={post.picture} alt="Post visual" />}
                <div className="post-actions">
                  <button onClick={() => likePost(post.id)}>Like</button>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="most-liked-section">
          <h2>Most Liked Post</h2>
          {mostLikedPost ? (
            <div>
              <h3>{mostLikedPost.title}</h3>
              <p>{mostLikedPost.description}</p>
              <p>Likes: {mostLikedPost.likes}</p>
            </div>
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
