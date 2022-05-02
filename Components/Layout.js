import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ...">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout