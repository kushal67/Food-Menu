// src/components/QRScanner.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {QrReader} from 'react-qr-reader';

const QRScanner = () => {
    const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      const tableNumber = data.split('-')[1]; // Assuming QR code data format is "table-<number>"
      navigate(`/table/${tableNumber}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>Scan QR Code</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRScanner;
