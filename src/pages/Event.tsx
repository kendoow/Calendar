import { Button, Modal, Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar';
import EventFrom from '../components/EventFrom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests,events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector (state => state.auth)
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username);
    }, [])

    const addNewEvent = (event : IEvent) => {
        setModalVisible(false)
        createEvent(event);
    }

    return (
        <Layout>
            
            <EventCalendar events={events} />
            <Row justify='center'>
            <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
            title = "Добавить событие"
            visible = {modalVisible }
            footer = {null}
            onCancel={() => setModalVisible(false)}
            >
            <EventFrom 
            submit={addNewEvent }
            guests={guests}
            />
            </Modal>
        </Layout>
    )
}

export default Event;
