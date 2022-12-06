import { Route, Routes, Link } from "react-router-dom"
import styles from "./TodoItem.module.css"
import About from "./About"
import TodoContainer from "../functionbased/TodoContainer"

const Navbar = () => {
    return (
        <div className="navbar">
        <ul className="nav" style={{
             display: "flex",
             justifyContent: "center",
             listStyle: "none",
            
        }}>
             <li className={styles.navItems}><Link to="/about">About</Link></li>
            <li className={styles.navItems}><Link to="/">Todo App</Link></li>
        </ul>

        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TodoContainer />}/>
        </Routes>

        </div>
    )
}

export default Navbar