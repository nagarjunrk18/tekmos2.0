/* import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, Typography } from '@material-ui/core';
import {QrReader} from 'react-qr-reader';

const Scanning = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const classes = useStyles();

  const handleErrorWebCam = (error) => {
    console.error('QR Scanner Error:', error);
    setScanResultWebCam('Error: Could not access camera. Please ensure camera permissions are granted.');
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <Container className={classes.container}>
      <Card>
        <Typography variant="h5" className={classes.title}>
          Scan QR Code with React
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Typography variant="h6">QR Code Scan by Webcam</Typography>
              <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                <QrReader
                  delay={300}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                  style={{ width: '100%' }}
                  constraints={{ facingMode: 'user' }}
                />
              </div>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Scanned Result: {scanResultWebCam || 'No result yet'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: theme.spacing(2),
  },
}));

export default Scanning; */

import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import "./Scanning.css";

const Scanning = () => {
  const [result, setResult] = useState('No result');
  const [scannedData, setScannedData] = useState([]); // Store all scanned data
  const [error, setError] = useState(null);
  const [isScannerRunning, setIsScannerRunning] = useState(false);
  const [cameraFacing, setCameraFacing] = useState('environment');
  const [isLoading, setIsLoading] = useState(true);
  const qrRef = useRef(null);
  const html5QrCode = useRef(null);
  const isMounted = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    html5QrCode.current = new Html5Qrcode('qr-reader');
    isMounted.current = true;
  
    const startScanner = async () => {
      setIsLoading(true);
      try {
        await html5QrCode.current.start(
          { facingMode: cameraFacing },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            if (isMounted.current) {
              setResult(decodedText);
              //covertExcel(decodedText);
              saveScanToLocalStorage(decodedText)
              //generatePDF(decodedText)
              setError(null);
              navigate('/thank-you');
            }
          },
          (errorMessage) => {
            if (isMounted.current) {
              console.warn('QR scan error:', errorMessage);
            }
          }
        );
        setIsScannerRunning(true);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to access camera. Please ensure permissions are granted.');
        setIsLoading(false);
      }
    };
  
    const timeoutId = setTimeout(startScanner, 500); // Wait for DOM
  
    return () => {
      clearTimeout(timeoutId);
      isMounted.current = false;
      if (html5QrCode.current && isScannerRunning) {
        html5QrCode.current.stop().then(() => {
          setIsScannerRunning(false);
        });
      }
    };
  }, [cameraFacing]);
  

  // Toggle between front and back camera
  const toggleCamera = () => {
    setCameraFacing((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  const covertExcel = (decodedText) => {
    // Add the scanned data to the list
    const newScan = {
        scanData: decodedText,
        timestamp: new Date().toISOString(),
      };
      const updatedScannedData = [...scannedData, newScan];
      setScannedData(updatedScannedData);

      // Create Excel file
      const worksheet = XLSX.utils.json_to_sheet(updatedScannedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'ScannedData');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(data, 'scanned_qr_codes.xlsx');

  }

 
  const generatePDF = async (decodedText) => {
    try {
      if (!decodedText) {
        console.error('No data provided to generate QR code.');
        return;
      }
  
      // Generate QR code as a base64 image
      const qrImage = await QRCode.toDataURL(decodedText, {
        errorCorrectionLevel: 'H', // High error correction
        margin: 2,                 // Add margin to make it scannable
        scale: 10                  // Higher scale for better clarity
      });
  
      // Create a new PDF
      const pdf = new jsPDF();
  
      // Add some text
      pdf.setFontSize(16);
      pdf.text('Scan this QR Code:', 20, 20);
  
      // Add QR Code image to PDF
      pdf.addImage(qrImage, 'PNG', 20, 30, 100, 100); // x, y, width, height
  
      // Optional: Add the decoded text below the QR code
      pdf.setFontSize(12);
      pdf.text(`Content: ${decodedText}`, 20, 140);
  
      // Save the PDF
      pdf.save('qr-code.pdf');
    } catch (error) {
      console.error('Error generating PDF with QR code:', error);
    }
  };

const generatePDFlist = async () => {
    const stored = JSON.parse(localStorage.getItem('scanned_qr_codes'));
    if (!stored || stored.date !== getTodayDate() || !stored.scans.length) {
      console.warn("No QR data found for today.");
      return;
    }
  
    const pdf = new jsPDF();
    let y = 20;
  
    for (let i = 0; i < stored.scans.length; i++) {
      const { scanData, timestamp } = stored.scans[i];
  
      // Generate QR code as base64
      const qrImage = await QRCode.toDataURL(scanData, {
        errorCorrectionLevel: 'H',
        margin: 2,
        scale: 6
      });
  
      if (i > 0 && y > 250) {
        pdf.addPage(); // Add new page if needed
        y = 20;
      }
  
      pdf.setFontSize(14);
      pdf.text(`Scan #${i + 1} - ${new Date(timestamp).toLocaleString()}`, 20, y);
      y += 10;
  
      // Add QR image
      pdf.addImage(qrImage, 'PNG', 20, y, 50, 50);
      y += 60;
  
      // Add decoded text
      pdf.setFontSize(12);
      //pdf.text(`Content: ${scanData}`, 20, y);
      y += 20;
    }
  
    pdf.save('all-scanned-qr-codes.pdf');
  };
  

  // Utility to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};
  
const saveScanToLocalStorage = (decodedText) => {
    const today = getTodayDate();
    const newScan = {
      scanData: decodedText,
      timestamp: new Date().toISOString(),
    };
  
    const stored = JSON.parse(localStorage.getItem('scanned_qr_codes')) || {
      date: today,
      scans: [],
    };
  
    // If the stored date is not today, reset the array
    if (stored.date !== today) {
      localStorage.setItem(
        'scanned_qr_codes',
        JSON.stringify({
          date: today,
          scans: [newScan],
        })
      );
    } else {
      const updatedScans = [...stored.scans, newScan];
      localStorage.setItem(
        'scanned_qr_codes',
        JSON.stringify({
          date: today,
          scans: updatedScans,
        })
      );
    }
  };
  

const getTodayScans = () => {
    const stored = JSON.parse(localStorage.getItem('scanned_qr_codes'));
    if (stored?.date === getTodayDate()) {
      return stored.scans;
    }
    return [];
  };
  
  
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          QR Code Scanner
        </h1>
        <button className="book-now-btn" onClick={() => navigate(-1)}> Go Back </button>

        {/* Scanner Container */}
        <div className="relative w-full aspect-square max-h-96 bg-gray-200 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
          )}
          <div
            id="qr-reader"
            ref={qrRef}
            className="w-full h-full"
          ></div>
          {/* Scan Area Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="flex justify-center items-center h-full">
              <div className="w-64 h-64 border-2 border-dashed border-blue-500 rounded-lg bg-transparent opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Camera Toggle Button */}
       {/*  <button
          onClick={toggleCamera}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          Switch to {cameraFacing === 'environment' ? 'Front' : 'Back'} Camera
        </button> */}

        {/* Error and Result Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-700 font-medium">Result:</p>
          <p className="text-gray-900 break-all">{result}</p>
        </div>

        {/* <button
            onClick={generatePDFlist}
            className="mt-4 w-full py-2 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
            >
            Download All QR Codes as PDF
        </button> */}

      </div>
    </div>
  );
};

export default Scanning;