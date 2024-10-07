import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { AiTwotoneDelete } from "react-icons/ai";
import axios from 'axios';
import '../../../assets/styles/dashboard-page.css';

export default function DashboardPage() {
  const [selectedValue, setSelectedValue] = useState('');
  const [serverData, setServerData] = useState([]);
  const serverError = () => alert('Server Error');

  useEffect(() => {
    if (selectedValue.length === 0 || selectedValue === 'Select the data') return;
    axios
      .get(`http://localhost:3003/${selectedValue}`)
      .then(response => setServerData(response.data))
      .catch(() => serverError())
  }, [selectedValue, serverData]);

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3003/${selectedValue}/${productId}`)
      .then(response => response.status === 200 ? alert('data has been deleted successfully!') : serverError())
      .catch(() => serverError());
  }

  return (
    <section className='dashboard-page'>
      <Container>
        <Row className='w-100 m-0'>
          <Col>
            <Form.Select size="lg" onChange={(event) => setSelectedValue(event.target.value)}>
              <option >Select the data</option>
              <option value='Orders'>Orders</option>
              <option value='tableReservation'>Table Reservation</option>
              <option value='Messages'>Messages</option>
            </Form.Select>

            <Table className='mt-5 bg-light' bordered responsive={true}>
              <thead>
                <tr>
                  {
                    serverData[0] &&
                    Object.keys(serverData[0]).map((key, index) => (
                      <th className='text-center align-middle' key={index}>{key}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  serverData.map((data, index) => {
                    return (
                      <tr key={index}>
                        {Object.values(data).map((value, index) => (
                          <td className='text-center align-middle' key={index}>{value}</td>
                        ))}
                        <td className='d-flex justify-content-center'>
                          <AiTwotoneDelete
                            className='fs-3 text-danger'
                            role={'button'}
                            onClick={() => handleDeleteProduct(data.id)}
                          />
                        </td>
                      </tr>

                    )
                  })
                }
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </section >
  );
}