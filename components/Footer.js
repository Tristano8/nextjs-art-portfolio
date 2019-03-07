import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'

const igAddress = "https://instagram.com/eddychai89"

const styles = theme => ({
    footer: {
        marginTop: theme.spacing.unit * 3
    },
    igLink: {
        padding: theme.spacing.unit,
    }
})


const IGIcon = () => (
    <div>
    <a href={igAddress} target='_blank'><img width="30" src={`static/instagram.svg`}/></a>
    </div>
)



const Footer = props => {
    const { classes } = props
    return (
    <div className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Follow me on Instagram! <IconButton className={classes.igLink}><IGIcon/></IconButton>
        </Typography>
        <Typography align="center" color="textSecondary">{'\u00A9'} 2019. All rights reserved.</Typography>
    </div>
    )
}

export default withStyles(styles)(Footer)

