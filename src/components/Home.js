import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/thunks';
import NavBar from './Navbar';
import Post from './Post';
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="home-container">
        <h1>Social Media For Travellers!</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="post-container">
          {loading ? (
            <p>Loading...</p>
          ) : filteredPosts.length === 0 ? (
            <p>No matching posts found.</p>
          ) : (
            filteredPosts.map((post) => <Post key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
