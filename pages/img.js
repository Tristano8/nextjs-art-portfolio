import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Img = withRouter(props => (
    <Layout>
    <div>
    <h1>{props.router.query.title}</h1>
    </div>
    <p>Description of the artwork</p>
    </Layout>
))

export default Img;