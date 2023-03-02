/**
 * To Generate Zatca QR Code imageData.
 * You can use it in both frontend and backend Nodejs projects.
 *
 */

import express from 'express'
import { Invoice } from '@axenda/zatca';
const app = express()
const port = 8000;
const host = 'localhost'

app.get('/', async function (req, res) {

  const invoice = new Invoice({
    sellerName: 'MY_SELLER_NAME',
    vatRegistrationNumber: 'ADD_COMPANY_VAT_NUMBER',
    invoiceTimestamp: '2021-12-04T00:00:00Z',
    invoiceTotal: '100.00',
    invoiceVatTotal: '15.00',
  });
  const imageData = await invoice.render();
  res.json(imageData);
});


app.listen(port, () => {
  console.log(`Zatca app listening on port ${port}`)
  console.log(`ZatcaQRImage app running on http://${host}:${port}`);

})