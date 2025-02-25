import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";

import "./App.css";

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState("null");

    useEffect(() => {
        blogService.getAll().then((blogs) => setBlogs(blogs));
    }, []);

    if (user === null) {
        return (
            <div>
                <h2>Log in to application</h2>
                <form>
                    <label>
                        username <input type="text" />
                    </label>
                    <label>
                        password <input type="password" />
                    </label>
                    <button>login</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h2>blogs</h2>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default App;
