import { useEffect, useState } from "react";
export const Posts = () => {
  // State to hold posts data
  const [posts, setPosts] = useState([]);
  // 1. Mounting Phase
  useEffect(() => {
    console.log("Mounting");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok!");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <div>
      <h4>Post Listing</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </>
          ) : (
            <p>No posts...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};
