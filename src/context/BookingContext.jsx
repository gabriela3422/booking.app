import React, {createContext, useContext, useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {getHotelById, getHotels} from "../services/apiService";

const BookingContext = createContext();

export const BookingProvider = ({ children, hotelIdFromParams }) => {
    const [hotelId, setHotelId] = useState(hotelIdFromParams);
    const { data: hotels, loading: hotelsLoading, error: hotelsError } = useFetch(getHotels);
    const { data: hotel, loading: hotelLoading, error: hotelError } = useFetch(getHotelById, hotelId);
    useEffect(() => {
        if (hotelIdFromParams) {
            setHotelId(hotelIdFromParams);
        }
    }, [hotelIdFromParams]);
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