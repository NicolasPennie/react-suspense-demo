import React, { Suspense } from 'react';
import { fetchUserData } from '../../mock/api';
import './User.css';

const resource = fetchUserData();

function UserPosts() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <React.Fragment>
      {posts.map(post => (
        <div key={post.id} className="User-post">
          <p className="User-posttext">{post.text}</p>
          <p className="User-postdate">{post.date}</p>
        </div>
      ))}
      <button className="User-addPost">Add post</button>
    </React.Fragment>
  );
}

function UserDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h4>{user.name}</h4>;
}


function User() {
  return (
    <div class="User-page">
      <Suspense fallback={<h4>Loading profile...</h4>}>
        <UserDetails/>
        <Suspense fallback={
          <div className="User-post">
            <p className="User-posttext">Loading posts...</p>
          </div>
        }>
          <UserPosts/>
        </Suspense>
      </Suspense>
    </div>
  );
}

export default User;
