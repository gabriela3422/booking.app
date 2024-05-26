import { useState } from "react";

const useDate = (initialDate) => {
    const [date, setDate] = useState(initialDate);

    const handleValueChange = (newDate) => {
        setDate(newDate);
    };

    return [date, handleValueChange];
};

export default useDate;