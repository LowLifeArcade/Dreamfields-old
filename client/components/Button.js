import React from 'react';

const Button = ({ buttonName, color }) => {
  return (
    <div>
      <button className='btn' >{buttonName}</button>
      <style jsx>{`
        .btn {
          padding: 7px 20px;
          font-size: 17px;
          background: rgb(185, 185, 185);
          border-radius: 3px;
          border: none;
          background: ${color};
        }
        `}</style>
    </div>
  );
};

export default Button;
