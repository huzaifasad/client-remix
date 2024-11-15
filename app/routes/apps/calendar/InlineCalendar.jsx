import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from "~/assets/dist/react-bootstrap-daterangepicker/dist/index.es";

const InlineCalendar = () => {

    useEffect(() => {
        document.getElementById("single_calendar").click();
    }, []);

    return (
        <DateRangePicker
            initialSettings={{
                singleDatePicker: true,
                showDropdowns: false,
                startDate: new Date(),
                minYear: 1901,
                autoApply: true,
                parentEl: "#inline_calendar",
            }}
        >
            <Form.Control id='single_calendar' type="text" name="datetimes" className="d-none" />
        </DateRangePicker>
    )
}

export default InlineCalendar;