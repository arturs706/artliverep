import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 ...">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout