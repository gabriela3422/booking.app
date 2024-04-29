import React from 'react';
import { faBed, faCarSide, faPersonSnowboarding, faPlane, faRoute, faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categoryIcons = {
    'Hotel': faBed,
    'Tour': faRoute,
    'Activity': faPersonSnowboarding,
    'Car': faCarSide,
    'Cruise': faShip,
    'Flights': faPlane
};
const getCategoryIcon = (categoryName) => {
    return categoryIcons[categoryName] || null;
};
const CategoryIcon = ({ categoryName }) => {
    const icon = getCategoryIcon(categoryName);

    return (
        <FontAwesomeIcon icon={icon} />
    );
};

export default CategoryIcon;