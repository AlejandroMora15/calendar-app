import React from 'react'
import { Navbar } from '../ui/Navbar'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const events = [{
    title: 'Cumpleaños novia',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div className='calendar-screen'>
            <Navbar />
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}