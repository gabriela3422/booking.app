import { useState } from "react";

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggleState = () => {
        setState(prevState => !prevState);
    };

    return {
        isActive: state,
        toggleIsActive: toggleState
    };
};

export default useToggle;