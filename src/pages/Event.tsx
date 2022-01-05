import { Button, Modal, Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar';
import EventFrom from '../components/EventFrom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.event)
    useEffect(() => {
        fetchGuests()
    }, [])

    return (
        <Layout>
            <EventCalendar events={[]} />
            <Row justify='center'>
            <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
            title = "Добавить событие"
            visible = {modalVisible }
            footer = {null}
            onCancel={() => setModalVisible(false)}
            >
            <EventFrom guests={guests}/>
            </Modal>
        </Layout>
    )
}

export default Event;
