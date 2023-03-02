# Zatca QR Image

<p align="center">To Generate Zatca QR Code imageData for invoices.You can use it in both frontend and backend Nodejs projects.</p>
  
## Installation

```sh
npm install

Add "type": "module" in package.json
```

### Usage

To generate a QR code is:


``` sh
import { Invoice } from '@axenda/zatca';

 const invoice = new Invoice({
    sellerName: 'MY_SELLER_NAME',
    vatRegistrationNumber: 'ADD_COMPANY_VAT_NUMBER',
    invoiceTimestamp: '2023-02-02T00:00:00Z',
    invoiceTotal: '100.00',
    invoiceVatTotal: '15.00',
  });
  
  const imageData = await invoice.render();
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./Main_Payment_App_API
npm install
```

### Use QR code image data

Use the image data to display the QR code in browser:

```sh
<!-- For React -->
<img src={imageData} alt="Invoice QR Code">
<!-- For Angular -->
<img [src]="imageData"/>
<!-- Just use the imageData variable no matter what framework you use -->
```

### Testing
```sh
npm install
npm app
```
