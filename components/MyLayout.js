import Header from './Header'
import Footer from './Footer'

const styles = theme => ({
    
})

const Layout = (props) => {
    return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
    )
}

export default Layout