import React , { useEffect , useState } from 'react';
import axios from 'axios';

const ShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get('mongodb://localhost:27017/berita')
      .then(response => {
        setShips(response.data);
      })
      .catch(error => {
        console.error('Error fetching ships:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Ships</h2>
      <ul>
        {ships.map(ship => (
          <li key={ship._id}>
            <strong>nama:</strong> {ship.nama}<br />
            <strong>deskripsi:</strong> {ship.deskripsi}<br />
            <strong>harga:</strong> {ship.harga}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShipList;
