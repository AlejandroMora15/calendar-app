import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import moment from 'moment'
import 'moment/locale/es'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-message-es'
import { CalendarEvent } from './CalendarEvent'

moment.locale('es')
const localizer = momentLocalizer(moment)

const events = [{
    title: 'Cumpleaños novia',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'comprar pastel',
    user: {
        _id: '123',
        name: 'Alejo'
    }
}]

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e) => {
        console.log(e)
    }

    const onSelectEvent = (e) => {
        console.log(e)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            diplay: 'block',
            color: 'white'
        }
        return {style}
    }

    const onViewChange = e => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    return (
        <div className='calendar-screen'>
            <Navbar />
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{event: CalendarEvent}}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />
        </div>
    )
}
