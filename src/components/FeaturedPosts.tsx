import React from "react";
import "../styles/FeaturedPosts.css";

import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";
import clockIcon from "../assets/clock-icon.svg";
import commentIcon from "../assets/comment-icon.svg";
import arrowIcon from "../assets/arrow-right.svg";

const FeaturedPosts: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: post1,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: post2,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: post3,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="featured-posts-section">
      <div className="featured-posts-container">
        <div className="featured-posts-header">
          <span className="featured-posts-subtitle">Practice Advice</span>
          <h2 className="featured-posts-title">Featured Posts</h2>
          <p className="featured-posts-desc">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="featured-posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-img-container">
                <img src={post.image} alt={post.title} className="post-img" />
                <span className="post-tag">{post.tag}</span>
              </div>

              <div className="post-content">
                <div className="post-meta-categories">
                  {post.categories.map((cat, index) => (
                    <span key={index} className="post-cat">
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="post-title">{post.title}</h3>
                <p className="post-desc">{post.description}</p>

                {/* Side-by-side footer row for date and comments */}
                <div className="post-footer-info">
                  <div className="post-date">
                    <img src={clockIcon} alt="Date" className="meta-icon" />
                    <span>{post.date}</span>
                  </div>
                  <div className="post-comments">
                    <img
                      src={commentIcon}
                      alt="Comments"
                      className="meta-icon"
                    />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <a href="#learn-more" className="post-link">
                  <span>Learn More</span>
                  <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
