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
            <a>
            <li className={styles.navItems}><Link to="/">About</Link></li>
            </a>
            <a>
            <li className={styles.navItems}><Link to="/todo">Todo App</Link></li>
            </a>
        </ul>

        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/todoapp" element={<TodoContainer />}/>
        </Routes>

        </div>
    )
}

export default Navbar