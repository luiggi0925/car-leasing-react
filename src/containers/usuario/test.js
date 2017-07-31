import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myDate : moment()
        }
        this.handleDateChange = this.handleDateChange.bind(this)
    }
    handleDateChange(date) {
        this.setState({
            myDate: date
        })
    }
    render() {
        return (
            <DatePicker
                selected={this.state.myDate}
                onChange={this.handleDateChange}
             />
        )
    }
}

export default Test