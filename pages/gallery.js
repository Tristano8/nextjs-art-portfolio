import Layout from '../components/MyLayout'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { withStyles } from '@material-ui/core/styles'




const imgData = [
    { title: 'Sunflowers', filename: 'placeholder.png', dimensions: '16 x 12', type: 'portrait', description: 'Some flowers I liked' },
    { title: 'Sunflowers', filename: 'placeholder.png', dimensions: '16 x 12', type: 'portrait', description: 'Some flowers I liked' },
    { title: 'Barn with sheep', filename: 'placeholder.png', dimensions: '10 x 8', type: 'landscape', description: 'A painting of some sheep in front of a barn'},
    { title: 'Still life', filename: 'placeholder.png', dimensions: '20 x 24', type: 'landscape', description: ''},
]

const styles = theme => ({
    categoryHeading: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
    },
    gridList: {
        display: 'flex',
        width: 600,
        overflow: 'hidden'
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
            <GridList cellHeight='auto' cols='3' spacing='6' className={classes.gridList}>
                { imgData.map(img => (
                    <GridListTile cols={img.type === 'landscape' ? 2 : 1}>
                            <img src={`static/artwork/${img.filename}`} alt='dummy' />
                        <GridListTileBar
                            title={`${img.title}`}
                            subtitle={`${img.dimensions}`}
                            />
                        </GridListTile>
                    ))
                    }
                </GridList>
            <Typography className={classes.categoryHeading} gutterBottom={true} variant='h4'>Illustration</Typography>
            <Typography className={classes.categoryHeading} gutterBottom={true} variant='h4'>Design</Typography>
        </div>
        
    </Layout>
)
    }
export default withStyles(styles)(Gallery)