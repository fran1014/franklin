import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"></Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th> ID </th>
              <th> USER </th>
              <th> DATE </th>
              <th> TOTAL </th>
              <th> PAID </th>
              <th> DELIVERED </th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
