import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props) {
    if(props.isLoggedIn) {
        return <h2 className={styles.welcomeMsg}>Welcome {props.username}</h2>
    }

    return (
        <h2 className={styles.loginPrompt}>Please login to continue</h2>
    )
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting