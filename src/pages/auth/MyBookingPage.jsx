import SearchBar from '../../layouts/common/SearchBar'
import AccommodationCard from '../../components/accommodation/AccommodationCard'
import React, { useState, useEffect } from 'react';
import AccommodationService from '../../services/api/accommodation/accommodation.service';
import { Spinner } from 'react-bootstrap';

const MyBookingPage = () => {

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
    <>
      <SearchBar />
      <div className='row p-3'>
            {loading ? (
                <div className='text-center my-5'>
                    <Spinner animation='border' variant='primary' />
                </div>

            ) : (
                <>
                    <div>
                        <h3 className="fw-bold mb-4">
                            <span className="border-bottom border-3 border-primary pb-1"></span>
                        </h3>
                    </div>

                    {accommodation.length > 0 ? (
                        accommodation.map((acc) => (
                            <AccommodationCard
                                key={acc.id}
                                accommodation={acc}
                            />
                        ))
                    ) : (
                        <div className='text-center'>
                            <p className='text-danger'>
                                ไม่สามารถโหลดข้อมูลห้องพักได้
                            </p>
                        </div>
                    )}

                </>
            )}
        </div>
    </>
  )
}

export default MyBookingPage
