import Layout from '../components/MyLayout'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'




const styles = theme => ({
    categoryHeading: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
    }
})

const Gallery = props => {
    const { classes } = props
    return (
    <Layout>
    <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h6" align="center" gutterBottom={true} color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
            </Typography>
            </div>
          </div>
        <div>
            <Typography className={classes.categoryHeading} gutterBottom={true} variant='h4'>Painting</Typography>
                <GridList>
                    <GridListTile >
                        <img src={`static/artwork/placeholder.png`} alt='dummy' />
                    </GridListTile>
                    <GridListTile>
                        <img src={'static/artwork/placeholder.png'} alt='dummy2'/>
                    </GridListTile>
                </GridList>
            <Typography className={classes.categoryHeading} gutterBottom={true} variant='h4'>Illustration</Typography>
                <GridList>
                <GridListTile >
                        <img src={`static/artwork/placeholder.png`} alt='dummy' />
                    </GridListTile>
                    <GridListTile>
                        <img src={'static/artwork/placeholder.png'} alt='dummy2'/>
                    </GridListTile>
                </GridList>
            <Typography className={classes.categoryHeading} gutterBottom={true} variant='h4'>Design</Typography>
            <GridList>
            <GridListTile >
                        <img src={`static/artwork/placeholder.png`} alt='dummy' />
                    </GridListTile>
            <GridListTile>
                        <img src={'static/artwork/placeholder.png'} alt='dummy2'/>
                    </GridListTile>
                    </GridList>
        </div>
    </Layout>
)
    }
export default withStyles(styles)(Gallery)