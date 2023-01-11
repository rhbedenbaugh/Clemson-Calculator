/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles.css';
import Select from 'react-select';

const options = [
  { value: 'cu', label: 'Clemson University' },
  { value: 'uga', label: 'University of Georgia' },
  { value: 'ua', label: 'University of Alabama' },
];

export default function Switch() {
  const [college, setCollege] = useState('cu');

  //   function handleCollegeChange(event) {
  //   setCollege(event.target.value);
  //   console.log(event.target.value)
  // }

  // const [food, setFood] = useState('fruit');

  // function handleFoodChange(event) {
  //   setFood(event.target.value);
  // }

  // return (
  //   <>
  //     <Select
  //       label='What do we eat?'
  //       className='span-four'
  //       options={[
  //         { label: 'Fruit', value: 'fruit' },
  //         { label: 'Vegetable', value: 'vegetable' },
  //         { label: 'Meat', value: 'meat' },
  //       ]}
  //       value={food}
  //       onChange={handleFoodChange}
  //     ></Select>
  //     <p>We eat {food}!</p>
  //   </>
  // );

  return (
    <>
      <Select
        options={options}
        defaultValue={college}
        className='span-four'
        align-content='center'
      >
        Clemson University
      </Select>
    </>
  );
}
