import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const activityCard = ({ activity }) => {
    const fullImageUrl = `${BASE_URL}/uploads/activities/${activity.image_name}`;
    

    return (
        <div className="col-lg-3 px-2 py-2">
            <div className="border rounded p-2 shadow-sm h-100">
                <Row>
                    {/* รูปภาพที่พัก */}
                    <Col md={12}>
                        <div className="image-wrapper position-relative">
                            <img src={fullImageUrl} alt={activity.name} className="img-fluid rounded" />
                            <div className="overlay">
                                <div className="overlay-text">{activity.name}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default activityCard
