import React, { useEffect, useState } from "react";
import AccommodationService from "../../services/api/accommodation/accommodation.service";
import AccommodationCard from "./AccommodationCard";
import { Spinner } from "react-bootstrap";

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPopularAccommodations();
    }, []);

    const fetchPopularAccommodations = async () => {
        try {
            setLoading(true);
            const res = await AccommodationService.getPopularAccommodation();
            setPopular(res?.data || []);
        } catch (error) {
            console.error("Error fetching accommodations:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row">
            {loading ? (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <>
                    <div className="mt-4 mb-2 mx-3">
                        <h3 className="fw-bold mb-4">
                            <span className="border-bottom border-3 border-primary pb-1">ห้องพักยอดนิยม</span>
                        </h3>
                    </div>
                    {popular.length > 0 ? (
                        popular.map((acc) => (
                            <AccommodationCard
                                key={acc.id}
                                accommodation={acc}
                            />
                        ))
                    ) : (
                        <div className="text-center col-12">
                            <p className="text-danger">
                                ไม่สามารถโหลดข้อมูลห้องพักยอดนิยมได้
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Popular;