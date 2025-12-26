import { useEffect } from "react";
export const Posts = () => {
  // 1. Mounting Phase
  useEffect(() => {
    console.log("Mounting");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok!");
        return res.json();
      })
      .then((data) => console.log("posts", data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <div>
      <h4>Post Listing</h4>
    </div>
  );
};
