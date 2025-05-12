import React, { useState, useEffect } from 'react';
import AccommodationService from '../../services/api/accommodation/accommodation.service';
import { Spinner } from 'react-bootstrap';
import AccommodationCard from './AccommodationCard';

const Accommodation = () => {
    const [accommodation, setAccommodation] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const fetchAccommodation = async () => {
        try {
            setLoading(true);
            const res = await AccommodationService.getAll();
            setAccommodation(res?.data || []);
        } catch (error) {
            console.log("Error fetching Accommodation", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-3'>
            {loading ? (
                <div className='text-center my-5'>
                    <Spinner animation='border' variant='primary' />
                </div>
            ) : (
                <>
                    <div>
                        <h3 className="fw-bold mb-4">
                            <span className="border-bottom border-3 border-primary pb-1">ห้องพักยอดนิยม</span>
                        </h3>
                    </div>

                    {accommodation.length > 0 ? (
                        accommodation.slice(0, 3).map((acc) => (
                            <div key={acc.id} className="mb-1 d-flex flex-column align-items-center">
                                <AccommodationCard accommodation={acc} />
                            </div>
                        ))
                    ) : (
                        <div className='text-center'>
                            <p className='text-danger'>ไม่สามารถโหลดข้อมูลห้องพักได้</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Accommodation;
