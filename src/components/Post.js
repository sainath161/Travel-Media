import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Post.css";

const Post = ({ post }) => {
    return (
        <div className="post-card">
            <img
                src={`https://picsum.photos/200?random=${post.id}`}
                alt={`Post ${post.id}`}
                className="post-image"
            />
            <div className="post-details">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{`${post.body.slice(0, 100)}...`}</p>
                <Link className="read-more-link" to={`/item/${post.id}`}>
                    Read More...
                </Link>
            </div>
        </div>
    );
};

export default Post;