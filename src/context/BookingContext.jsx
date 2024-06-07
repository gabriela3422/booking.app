import React, {createContext, useContext, useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {getHotelById, getHotels} from "../services/apiService";

const BookingContext = createContext();

export const BookingProvider = ({children, params}) => {
    const [hotelId, setHotelId] = useState(params.id || 1);
    const {data: hotels, loading: hotelsLoading, error: hotelsError} = useFetch(getHotels);
    const {
        data: hotel,
        loading: hotelLoading,
        error: hotelError,
    } = useFetch(getHotelById, hotelId);

    useEffect(() => {
        if (params.id) {
            setHotelId(params.id);
        }
    }, [params.id]);

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