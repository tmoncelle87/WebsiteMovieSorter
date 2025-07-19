import React from 'react';


const Buttons = ({ onSort, onFilter, onReset }) => {
  return (
    <div className="buttons-container">
      <button className="Movie-Name-Input-Button" onClick={onSort}>
              Name Input
      </button>
          <button className="Movie-File-Upload-Button" onClick={onFilter}>
              File Upload
      </button>

    </div>
  );
};
export default Buttons;