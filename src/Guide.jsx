import React from 'react';
import './Buttons.css';

const Guide = () => {
    const onSort = () => {
        console.log("Sort (Name Input) button clicked");
    };

    const onFilter = () => {
        console.log("Filter (File Upload) button clicked");
    };

    return (
        <>
            <section className="Web-Header">
                <h1>Quick Movie Sorter </h1>
            </section>

            <section className="MovieNameInputDescription">
                <h3 id="Movie-Name-Input-Text">
                    If you are wanting to enter a new movie name(s) please press Name Input
                </h3>

            </section>

           
                <button className="Movie-Name-Input-Button" onClick={onSort}>
                    Name Input
                </button>
            


            <section className="MovieFileUploadDescription">
                <h3 id="Movie-File-Upload-Text">
                    If you are wanting to upload a movie list file please press File Upload
                </h3>
            </section>


        
              
                <button className="Movie-File-Upload-Button" onClick={onFilter}>
                    File Upload
                </button>
           
        </>
    );
};

export default Guide;
