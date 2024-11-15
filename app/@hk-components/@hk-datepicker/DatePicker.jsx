import React from 'react';
import pkg from 'bootstrap-daterangepicker';
const { DateRangePicker: DateRangePicker4 } = pkg;

const DatePicker = ({ onSelect }) => {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleSelect = (ranges) => {
        onSelect(ranges.startDate.format('YYYY-MM-DD'), ranges.endDate.format('YYYY-MM-DD'));
        setStartDate(ranges.startDate.format('YYYY-MM-DD'));
        setEndDate(ranges.endDate.format('YYYY-MM-DD'));
    };

    return (
        <DateRangePicker4
            startDate={startDate}
            endDate={endDate}
            onApply={handleSelect}
        />
    );
};

export default DatePicker;
