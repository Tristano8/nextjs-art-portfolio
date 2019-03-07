import Layout from '../components/MyLayout'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bioText: {
        marginLeft: theme.spacing.unit * 2
    }
})

const Index = props => {
    const { classes } = props
    return (
    <Layout>
        <div align='center'>
        <Typography variant='h1' gutterBottom={true} color='textPrimary'>My Art Website</Typography>
        </div>
        <div className={classes.bioText}>
            <Typography color='textSecondary'>These are some words about me, possibly including a picture and an explanation
                about the site, you, and your art
            </Typography>
        </div>
    </Layout>
    
)
    }

export default withStyles(styles)(Index)