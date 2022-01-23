import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>HLLBR TOURS</h2>
        <h1>ಹ◡ಹ</h1>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;