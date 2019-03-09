import Layout from '../components/MyLayout'
import ContactForm from '../components/ContactForm'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    form: {
        marginLeft: theme.spacing.unit * 5
    }
})

const Contact = props => {
    const { classes } = props
    return (
    <Layout>
        <div className={classes.form}>
        <ContactForm />
        </div>
    </Layout>
)}
export default withStyles(styles)(Contact) 