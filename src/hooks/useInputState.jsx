import { useState } from "react";

const useInputState = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
};

export default useInputState;