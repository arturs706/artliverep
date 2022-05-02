import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="bg-indigo-500">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout