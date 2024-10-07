import React from 'react';
import Row from 'react-bootstrap/Row';
import '../../../../assets/styles/map.css';

export default function Map() {
  return (
    <section className="map">
      <Row className='w-100'>
        <h4 className='map-text text-uppercase text-center mb-3'>MAP</h4>
        <h2 className='map-title text-center mb-5'>Find Us on Google Maps</h2>
      </Row>

      <Row className='w-100 m-0'>
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4500%20Mercantile%20Plaza,%20Fort%20Worth,%20TX%2076137,%20%D0%A1%D0%A8%D0%90+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a>
        </iframe>
      </Row>
    </section>
  )
}
