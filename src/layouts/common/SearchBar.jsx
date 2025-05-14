import { useState, useEffect } from 'react';
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  DropdownButton,
  InputGroup
} from 'react-bootstrap';
import { FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import "dayjs/locale/th";
import th from 'date-fns/locale/th';
import { registerLocale } from 'react-datepicker';

registerLocale('th', th);

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialCheckIn = searchParams.get('checkIn');
    const initialCheckOut = searchParams.get('checkOut');
    const initialAdults = parseInt(searchParams.get('adults')) || 1;
    const initialChildren = parseInt(searchParams.get('children')) || 0;

    if (initialCheckIn) setCheckInDate(dayjs(initialCheckIn).toDate());
    if (initialCheckOut) setCheckOutDate(dayjs(initialCheckOut).toDate());
    setAdults(initialAdults);
    setChildren(initialChildren);
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams({
      checkIn: checkInDate ? dayjs(checkInDate).format('YYYY-MM-DD') : '',
      checkOut: checkOutDate ? dayjs(checkOutDate).format('YYYY-MM-DD') : '',
      adults,
      children,
    });

    await new Promise((res) => setTimeout(res, 500));
    navigate(`/search-results?${params.toString()}`);
    setLoading(false);
  };

  const datepickerCheckInInput = ({ value, onClick, placeholder }) => (
  <InputGroup>
    <InputGroup.Text>
      <Icon icon="mdi:calendar-import-outline" width="24" height="24" />
    </InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      readOnly
      className="bg-white"
    />
  </InputGroup>
);

// Input สำหรับเช็คเอาท์
const datepickerCheckOutInput = ({ value, onClick, placeholder }) => (
  <InputGroup>
    <InputGroup.Text>
      <Icon icon="mdi:calendar-export-outline" width="24" height="24" />
    </InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      readOnly
      className="bg-white"
    />
  </InputGroup>
);

  return (
    <Form
      className="bg-info p-4 rounded bg-opacity-75 shadow-sm mx-auto"
      style={{ maxWidth: '900px' }}
      onSubmit={handleSearch}
    >
      <div className="bg-white p-2 rounded shadow-sm">
        <Row className="align-items-end g-3">
          {/* Check-in */}
          <Col md>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                if (!checkOutDate || dayjs(checkOutDate).isBefore(date)) {
                  setCheckOutDate(dayjs(date).add(1, 'day').toDate());
                }
              }}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              locale="th"
              placeholderText="เลือกวันที่เช็คอิน"
              customInput={datepickerCheckInInput({
                value: checkInDate ? dayjs(checkInDate).format("DD/MM/YYYY") : "",
                onClick: () => {},
                placeholder: "เลือกวันที่เช็คอิน",
              })}
              popperContainer={({ children }) => (
                <div style={{ zIndex: 2000, position: "relative" }}>{children}</div>
              )}
            />
          </Col>

          {/* Check-out */}
          <Col md>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              dateFormat="dd/MM/yyyy"
              locale="th"
              placeholderText="เลือกวันที่เช็คเอาท์"
              customInput={datepickerCheckOutInput({
                value: checkOutDate ? dayjs(checkOutDate).format("DD/MM/YYYY") : "",
                onClick: () => {},
                placeholder: "เลือกวันที่เช็คเอาท์",
              })}
              popperContainer={({ children }) => (
                <div style={{ zIndex: 2000, position: "relative" }}>{children}</div>
              )}
            />
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
            <Button
              type="submit"
              variant="info"
              className="w-100 px-4 text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                "ค้นหา"
              )}
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
}
