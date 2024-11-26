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
    emoji: ''
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

        // Set most liked post on load
        const mostLiked = response.data.reduce((prev, current) => {
          return current.likes > (prev.likes || 0) ? current : prev;
        }, {});
        setMostLikedPost(mostLiked);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Handle image URL change
  const handleImageUrlChange = (e) => {
    setNewPost({ ...newPost, picture: e.target.value });
  };

  // Handle GIF file upload
  const handleGifChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({ ...newPost, gif: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle emoji click
  const handleEmojiClick = (emoji) => {
    setNewPost({ ...newPost, emoji });
    setShowModal(false); // Close modal after emoji selection
  };

  // Create post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://petapp-backend-abg7.onrender.com/community', {
        title: newPost.title,
        description: newPost.description,
        comment: newPost.comment,
        picture: newPost.picture,
        gif: newPost.gif,
        emoji: newPost.emoji,
      });
      setPosts([...posts, { ...response.data, likes: 0 }]);
      setNewPost({ title: '', description: '', comment: '', picture: '', gif: '', emoji: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Like post
  const likePost = async (postId) => {
    try {
      const response = await axios.post(`https://petapp-backend-abg7.onrender.com/community/${postId}/like`);
      const updatedPosts = posts.map((post) =>
        post.id === postId ? { ...post, likes: response.data.likes } : post
      );
      setPosts(updatedPosts);

      // Update most liked post
      const updatedMostLiked = updatedPosts.reduce((prev, current) => {
        return current.likes > (prev.likes || 0) ? current : prev;
      }, {});
      setMostLikedPost(updatedMostLiked);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Delete post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://petapp-backend-abg7.onrender.com/${postId}`);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);

      // Update most liked post
      const updatedMostLiked = updatedPosts.reduce((prev, current) => {
        return current.likes > (prev.likes || 0) ? current : prev;
      }, {});
      setMostLikedPost(updatedMostLiked);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Open modal to add content (image, emoji, or comment)
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
    <div className="community-page">
      {/* Left section for posts */}
      <div className="community-content">
        <div className="post-create-container">
          <div className="post-create-header">
            <img
              src="https://via.placeholder.com/50" // Replace with user's avatar URL if available
              alt="User Avatar"
              className="user-avatar"
            />
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="post-input"
            />
            <input
              type="text"
              placeholder="Post Description"
              value={newPost.description}
              onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              className="post-input"
            />
          </div>

          {/* Action Buttons */}
          <div className="post-create-actions">
            <button type="button" className="action-button" onClick={() => openModal('image')}>
              <i className="fas fa-image"></i>
            </button>
            <button type="button" className="action-button" onClick={() => openModal('emoji')}>
              <i className="fas fa-smile"></i>
            </button>
            <button type="button" className="action-button" onClick={() => openModal('comment')}>
              <i className="fas fa-comment"></i>
            </button>
          </div>

          <button onClick={createPost} className="post-submit-button">
            Post
          </button>
        </div>

        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Comment: {post.comment}</p>
              {post.picture && <img src={post.picture} alt="Post visual" />}
              {post.gif && <img src={post.gif} alt="GIF" />}
              <p>Emoji: {post.emoji}</p>
              <p>{post.likes} Likes</p>

              {/* Post Actions */}
              <div className="post-actions">
                <button onClick={() => likePost(post.id)} className="post-action-btn">
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button onClick={() => openModal('comment')} className="post-action-btn">
                  <i className="fas fa-comment"></i> Comment
                </button>
                <button onClick={() => deletePost(post.id)} className="post-action-btn">
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right section for most liked post */}
      <div className="most-liked-section">
        <h2>Most Liked Post</h2>
        {mostLikedPost ? (
          <div className="most-liked-post">
            <h3>{mostLikedPost.title}</h3>
            <p>{mostLikedPost.description}</p>
            <p>Likes: {mostLikedPost.likes}</p>
            {mostLikedPost.picture && <img src={mostLikedPost.picture} alt="Post visual" />}
          </div>
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal">X</button>

            {modalType === 'image' && (
              <div>
                <h2>Enter Image URL</h2>
                <input
                  type="text"
                  placeholder="Paste an image URL here"
                  value={newPost.picture}
                  onChange={handleImageUrlChange}
                />
                {newPost.picture && <img src={newPost.picture} alt="Preview" />}
              </div>
            )}

            {modalType === 'emoji' && (
              <div>
                <h2>Select an Emoji</h2>
                <div className="emoji-container">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      className="emoji-button"
                      onClick={() => handleEmojiClick(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {modalType === 'comment' && (
              <div>
                <h2>Leave a Comment</h2>
                <textarea
                  placeholder="Write your comment"
                  value={newPost.comment}
                  onChange={(e) => setNewPost({ ...newPost, comment: e.target.value })}
                ></textarea>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};
