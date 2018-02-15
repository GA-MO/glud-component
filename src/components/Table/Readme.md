```jsx

  const dataTable = [
    {
      id: 1,
      date: 'My name 1',
      regionCode: '983888',
      stockCode: '343334',
      productCode: '900992',
      orderId: 'DFIE0283490',
      serial: '0239493939',
      saleCode: '834900'
    },
    {
      id: 2,
      date: 'My name 2',
      regionCode: '983888',
      stockCode: '343334',
      productCode: '900992',
      orderId: 'DFIE0283490',
      serial: '0239493939',
      saleCode: '834900'
    },
    {
      id: 3,
      date: 'My name 3',
      regionCode: '983888',
      stockCode: '343334',
      productCode: '900992',
      orderId: 'DFIE0283490',
      serial: '0239493939',
      saleCode: '834900'
    },
    {
      id: 4,
      date: 'My name 4',
      regionCode: '983888',
      stockCode: '343334',
      productCode: '900992',
      orderId: 'DFIE0283490',
      serial: '0239493939',
      saleCode: '834900'
    }
  ]

  const elementHead = () =>
    <tr>
      <th>วันที่ตัดสินค้า (รับสิทธิ์)</th>
      <th>Region Code</th>
      <th>Stock Code</th>
      <th>Mat.Code</th>
      <th>Order ID</th>
      <th>IMEI ที่รับ</th>
      <th>Sale Code</th>
    </tr>

  const elementTD = data =>
    <tr key={`td-${data.id}`}>
      <td>{data.date}</td>
      <td>{data.regionCode}</td>
      <td>{data.stockCode}</td>
      <td>{data.productCode}</td>
      <td>{data.orderId}</td>
      <td>{data.serial}</td>
      <td>{data.saleCode}</td>
    </tr>

  const fieldsForSearch = {
    date: true,
    regionCode: true,
    stockCode: true,
    productCode: true,
    orderId: true,
    serial: true,
    saleCode: true
  }

    ;<Table
      dataList={dataTable}
      elementHead={elementHead}
      elementTD={elementTD}
      viewPerPage={2}
      totalRecord={dataTable.length}
      pagination='bottom'
      fieldsForSearch={fieldsForSearch}
      placeholderSearch='Search to filter data'
    />
```