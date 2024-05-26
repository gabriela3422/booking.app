import { useState } from "react";

const useOptions = (initialOptions) => {
    const [options, setOptions] = useState(initialOptions);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return [options, handleOption];
};

export default useOptions;