import React, {createContext, useContext, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {getHotelById, getHotels} from "../services/apiService";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [hotelId, setHotelId] = useState(null);
    const { data: hotels, loading: hotelsLoading, error: hotelsError } = useFetch(getHotels);
    const { data: hotel, loading: hotelLoading, error: hotelError } = useFetch(getHotelById, hotelId);

    return (
        <BookingContext.Provider value={{
            hotels, hotelsLoading, hotelsError,
            hotel, hotelLoading, hotelError,
            setHotelId
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    return useContext(BookingContext);
};