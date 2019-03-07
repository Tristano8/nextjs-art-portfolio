import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    formButton: {
        marginTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5
    }
})

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = name => e => {

        this.setState({[name]:e.target.value})
    }

    handleSubmit = () => {
        // Sanitize message input and send it to email address
        console.log('just sent email')
    }

    

    render() {
        const { classes } = this.props
        return(
        <form>
            <TextField 
                label='Name'
                margin='normal'
                placeholder='Name'
                value={this.state.name}
                onChange={this.handleChange('name')}
            />
            <br/>
            <TextField
                label='Email'
                placeholder='Email'
                margin='normal'
                value={this.state.email}
                onChange={this.handleChange('email')}
            />
            <br/>
            <TextField
                label='Message'
                multiline
                rows="5"
                value={this.state.message}
                placeholder='Your Message'
                margin='normal'
                onChange={this.handleChange('message')}
                variant='outlined'/>
                <br/>
            <Button variant="contained" className={classes.formButton} onClick={this.handleSubmit} color="secondary">
                <Typography>Send</Typography>
            </Button>
        </form>
    )
        }
    }

export default withStyles(styles)(ContactForm)