import React, {createContext, useContext, useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {getHotelById, getHotels, getHotelsByQuery} from "../services/hotelsApi";

const BookingContext = createContext();

export const BookingProvider = ({children, params}) => {
    const [filters, setFilters] = useState({ city: '', price_gte: '', price_lte: '' });

    const [hotelId, setHotelId] = useState(params.id || 1);
    const {data: hotels, loading: hotelsLoading, error: hotelsError} = useFetch(getHotels);
    const {data: hotel, loading: hotelLoading, error: hotelError} = useFetch(getHotelById, hotelId);
    const [filteredHotels, setFilteredHotels] = useState([]);

    const [uniqueCities, setUniqueCities] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [hotelsByCity, setHotelsByCity] = useState({});

    useEffect(() => {
        if (hotels) {
            const cities = hotels
                .map(hotel => hotel.city)
                .filter((city, index, self) => self.indexOf(city) === index);

            setUniqueCities(cities);

            const prices = hotels.map(hotel => hotel.price);

            setPriceRange({ min: Math.min(...prices), max: Math.max(...prices) });

            const cityCounts = hotels.reduce((acc, hotel) => {
                acc[hotel.city] = (acc[hotel.city] || 0) + 1;
                return acc;
            }, {});
            setHotelsByCity(cityCounts);
            setFilteredHotels(hotels);

        }

    }, [hotels]);


    useEffect(() => {
        if (params?.id) {
            setHotelId(params.id);
        }
    }, [params.id]);

    useEffect(() => {
        if (!filters.city.length && !filters.price_gte && !filters.price_lte) {
            setFilteredHotels(hotels);
        } else {
            console.log('Fetching with filters:', filters);
            getHotelsByQuery(filters).then(response => {
                console.log('Filtered hotels:', response.data);
                setFilteredHotels(response.data);
            }).catch(error => {
                console.error('Error fetching filtered hotels:', error);
            });
        }
    }, [filters, hotels]);
    return (
        <BookingContext.Provider value={{
            hotels,
            hotelsLoading,
            hotelsError,
            hotel,
            hotelLoading,
            hotelError,
            setHotelId,
            filters,
            setFilters,
            filteredHotels,
            uniqueCities, priceRange, hotelsByCity
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    return useContext(BookingContext);
};