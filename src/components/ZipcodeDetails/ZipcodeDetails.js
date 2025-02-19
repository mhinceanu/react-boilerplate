import React from 'react';
import PropTypes from 'prop-types';
import './ZipcodeDetails.scss';

const ZipcodeDetails = ({ details }) => {
  if (!details) {
    return <div data-testid="no-data">No data.</div>;
  }

  return (
    <article>
      <p>Country: {details?.country}</p>
      <p>Post code: {details?.['post code']}</p>

      {details?.places?.map((place) => (
        <section key={place.state}>
          <p>Latitude: {place?.latitude}</p>
          <p>Longitude: {place?.longitude}</p>
          <p>Place name: {place?.['place name']}</p>
          <p>State: {place?.state}</p>
          <p>Abbreviation: {place?.['state abbreviation']}</p>
        </section>
      ))}
    </article>
  );
};

ZipcodeDetails.propTypes = {
  details: PropTypes.objectOf(
    PropTypes.shape({
      country: PropTypes.string,
      ['post code']: PropTypes.string,
      places: PropTypes.arrayOf(
        PropTypes.shape({
          latitude: PropTypes.string,
          longitude: PropTypes.string,
          ['place name']: PropTypes.string,
          state: PropTypes.string,
          ['state abbreviation']: PropTypes.string
        })
      )
    })
  )
};

export default ZipcodeDetails;
