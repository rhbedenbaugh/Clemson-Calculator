/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles.css';
import Select from 'react-select';

export default function Switch() {
  return (
    <>
      <Select
        options={[
          { pagename: 'cu', value: 'cu', label: 'Clemson University' },
          { pagename: 'uga', value: 'uga', label: 'University of Georgia' },
          { pagename: 'ua', value: 'ua', label: 'University of Alabama' },
        ]}
        defaultValue='Clemson University'
        className='span-four'
        align-content='center'
        name='pagename'
        id='pagename'
      ></Select>
    </>
  );
}
