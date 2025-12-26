import { useEffect, useState } from "react";
export const Posts = () => {
  // State to hold posts data
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [seconds, setSeconds] = useState(0);
  // 1. Mounting Phase
  useEffect(() => {
    console.log("Mounting");
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok!");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [query]);

  // 3 Cleanup Phase
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  // Set post search
  const changeHandler = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <div>Timer: {seconds} seconds</div>
      </div>
      <h4>Post Listing</h4>
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Search posts..."
      />
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
            <tr>
              <td colSpan="3">
                <p>No posts...</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
