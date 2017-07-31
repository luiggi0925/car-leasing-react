import React from 'react'
import './mensaje.css'

const MESSAGE_TYPES = [ 'error', 'warning', 'info' ];
class Mensaje extends React.Component {
    renderMessage(message, i) {
        return <p key={i}>{message}</p>
    }
    render() {
        const messages = this.props.messages
        let type = (this.props.type || '').toLowerCase()
        type = 'message-' + (MESSAGE_TYPES.indexOf(type) > 0 ? type : 'error')
        console.log(type)
        return (
            <div className={type}>
                { messages.map(this.renderMessage) }
            </div>
        )
    }
}

export default Mensaje