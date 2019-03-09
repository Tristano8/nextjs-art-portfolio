import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Home from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    appBar: {
        marginBottom: theme.spacing.unit * 4,
        display: 'flex',

    },
    
    hover: {
        paddingLeft: theme.spacing.unit * 2,
        '&:hover': {
            opacity: 0.5
        } 
    },

    navWithIcon: {
        display: 'flex',
        alignItems: 'center',
        },
    
    icon: {
        marginRight: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 6,
        
    }
})


const Header = props => { 
    const { classes } = props
    return (
        <AppBar position="static" align="center" className={classes.appBar}>
            <div className={classes.navTab}>
            <Tab className={classes.hover} label={ 
                    <Link href="/">
                    <div className={classes.navWithIcon}><Home className={classes.icon} /><Typography inline={true} variant="h6">Home</Typography></div></Link>}
                    />
            <Tab className={classes.hover} label={
                    <Link href='/gallery'><Typography variant="h6">Gallery</Typography></Link>}
                    />
            <Tab className={classes.hover} label={
                    <Link href='/contact'><Typography variant="h6">Contact</Typography></Link>}
                    />
            </div>
        </AppBar>
        )
    }

export default withStyles(styles)(Header);