import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules';


interface EventFormProps {
    guests: IUser[]
}


const EventFrom: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)

    const selectDate = (date: Moment | null) => {
        console.log(date)
    }

    return (
        <Form>
            <Form.Item
                label="Название события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({ ...event, description: e.target.value })}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
                    {props.guests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Cоздать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventFrom;
