import { useState } from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup
} from 'react-bootstrap';
import { FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <Form className="bg-primary p-4 rounded shadow-sm mx-auto" style={{ maxWidth: '900px' }}>
      <div className='bg-white p-2 rounded shadow-sm'>
        <Row className="align-items-end g-3">
          {/* Check-in */}
          <Col md>
            <InputGroup>
              <InputGroup.Text>
                <FaCalendarAlt />
              </InputGroup.Text>
              <Form.Control
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                placeholder="เช็คอิน"
              />
            </InputGroup>
          </Col>

          {/* Check-out */}
          <Col md>
            <InputGroup>
              <InputGroup.Text>
                <FaCalendarAlt />
              </InputGroup.Text>
              <Form.Control
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                placeholder="เช็คเอาท์"
              />
            </InputGroup>
          </Col>

          {/* Guests */}
          <Col md>
            <DropdownButton
              id="dropdown-guests"
              title={
                <span>
                  <FaUserFriends className="me-2" />
                  ผู้ใหญ่ {adults}, เด็ก {children}
                </span>
              }
              variant="outline-secondary"
            >
              <div className="px-3 py-2" style={{ minWidth: '200px' }}>
                <Form.Group className="mb-2">
                  <Form.Label>ผู้ใหญ่ (สูงสุด 4)</Form.Label>
                  <Form.Select value={adults} onChange={e => setAdults(Number(e.target.value))}>
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>เด็ก (สูงสุด 2)</Form.Label>
                  <Form.Select value={children} onChange={e => setChildren(Number(e.target.value))}>
                    {[0, 1, 2].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </DropdownButton>
          </Col>

          {/* Search Button */}
          <Col xs="auto">
            <Button variant="info" as={Link} to="/my-bookings" className="w-100 px-4 text-white">
              ค้นหา
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
}
