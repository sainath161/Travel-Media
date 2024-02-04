import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './Navbar';
import '../styles/Detail.css';
import Post from './Post'; 
import { IoArrowBackSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Detail = () => {
  const { id } = useParams();
  const allPosts = useSelector((state) => state.data);
  const post = allPosts.find((p) => p.id === Number(id));

  const [showDetail, setShowDetail] = useState(true);

  if (!post) {
    return <p>Loading...</p>;
  }

  const handleDetailClick = () => {
    setShowDetail(true);
    console.log('Detail button clicked');
  };

  const handleUserInfoClick = () => {
    setShowDetail(false);
    console.log('User Info button clicked');
  };

  const recommendedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 8);

  return (
    <div>
        <NavBar />
      <div className="back" style={{ display: 'flex', alignItems: 'center', paddingLeft: '40px' }}>
        <span className='goback'><Link to="/"><IoArrowBackSharp /></Link></span>
        <h1 style={{ marginLeft: '20px' }}>{post.title}</h1>
      </div>
      <div style={{ display: 'flex', marginBottom: '20px', padding: '40px' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={`https://picsum.photos/200?random=${post.id}`}
            alt={`Post ${post.id}`}
            style={{ width: '300px', height: 'auto', borderRadius: '5px', marginRight: '20px' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, margin: '10px', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <p>{post.title}</p>
            <button onClick={() => console.log('Share button clicked')} style={{ marginLeft: '10px' }}><FaShareAlt /></button>
            <button onClick={() => console.log('Favorite button clicked')} style={{ marginLeft: '10px' }}><MdFavoriteBorder /></button>
          </div>
        </div>
        <div>
          <div>
            <button style={{ marginLeft: '10px' }}
              onClick={handleDetailClick}
              className={showDetail ? 'active' : ''}
            >
              Detail
            </button>
            <button style={{ marginLeft: '10px' }}
              onClick={handleUserInfoClick}
              className={!showDetail ? 'active' : ''}
            >
              User Info
            </button>
          </div>
          <div>
            {showDetail ? <p>{post.body}</p> : <p>User ID: {post.userId}</p>}
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ paddingLeft: '40px' }}>More Posts</h2>
        <div className="post-container">
          {recommendedPosts.map((recommendedPost) => (
            <Post key={recommendedPost.id} post={recommendedPost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
