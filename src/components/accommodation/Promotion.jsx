import React, { useState, useEffect } from 'react';
import AccommodationService from '../../services/api/accommodation/accommodation.service';
import { Spinner } from 'react-bootstrap';
import AccommodationCard from './AccommodationCard';

const Promotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            setLoading(true);
            const res = await AccommodationService.getPromotion();
            setPromotions(res?.data || []);
        } catch (error) {
            console.log("Error fetching Promotion", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='row p-3'>
            {loading ? (
                <div className='text-center my-5'>
                    <Spinner animation='border' variant='primary' />
                </div>

            ) : (
                <>
                    <div>
                        <h3 className="fw-bold mb-4">
                            <span className="border-bottom border-3 border-primary pb-1">โปรโมชั่นพิเศษ</span>
                        </h3>
                    </div>

                    {promotions.length > 0 ? (
                        promotions.map((promotion) => (
                            <AccommodationCard
                                key={promotion.id}
                                accommodation={promotion}
                            />
                        ))
                    ) : (
                        <div className='text-center'>
                            <p className='text-danger'>
                                ไม่สามารถโหลดข้อมูลโปรโมชั่นได้
                            </p>
                        </div>
                    )}

                </>
            )}
        </div>
    );
};

export default Promotion;
