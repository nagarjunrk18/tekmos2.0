import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

const SecretPDFPage = () => {
  const [secretCode, setSecretCode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const SECRET = 'open12345';

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-GtvP5RAKxt6U2GukdxbYlR5cT/2j3P4kX7z5oQ+xT9qF8de9R4Pf9fB2bYb6IqKf';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  const handleCheckCode = () => {
    if (secretCode === SECRET) {
      setAccessGranted(true);
    } else {
      alert('❌ Invalid code!');
    }
  };

  const getTodayDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  };

  const generatePDF = async () => {
    const stored = JSON.parse(localStorage.getItem('scanned_qr_codes'));
    if (!stored || stored.date !== getTodayDate() || !stored.scans.length) {
      alert('⚠️ No QR data found for today.');
      return;
    }

    const pdf = new jsPDF();
    let y = 20;

    for (let i = 0; i < stored.scans.length; i++) {
      const { scanData, timestamp } = stored.scans[i];
      const qrImage = await QRCode.toDataURL(scanData, {
        errorCorrectionLevel: 'H',
        margin: 2,
        scale: 6,
      });

      if (i > 0 && y > 250) {
        pdf.addPage();
        y = 20;
      }

      pdf.setFontSize(14);
      pdf.text(`Scan #${i + 1} - ${new Date(timestamp).toLocaleString()}`, 20, y);
      y += 10;

      pdf.addImage(qrImage, 'PNG', 20, y, 50, 50);
      y += 60;

      pdf.setFontSize(12);
      pdf.text(`Content: ${scanData}`, 20, y);
      y += 20;
    }

    pdf.save('all-scanned-qr-codes.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">🔒 Secure QR PDF Download</h1>

        <p className="text-gray-600 text-sm mb-4 text-center">Enter the secret code to unlock the download option.</p>

        <input
          type="password"
          placeholder="Enter secret code"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
        />

        <button
          onClick={handleCheckCode}
          className="w-full mb-4 px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-all"
        >
          ✅ Unlock PDF Download
        </button>

        <button
          onClick={generatePDF}
          disabled={!accessGranted}
          className={`w-full px-6 py-2 rounded-md font-semibold transition-all ${
            accessGranted
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          📄 Download QR Codes PDF
        </button>
      </div>
    </div>
  );
};

export default SecretPDFPage;
