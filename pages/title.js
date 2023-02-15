import React from "react";

const sectionTitle = ({ title }) => {


    return (
        <>
            <style>
                {`
                    .section-title {
                        font-weight: 1000;
                        color: #251462;
                        text-align: center;
                        font-size: 35px;
                    }
                `}
            </style>
            <h1 className="section-title">{title}</h1>
        </>
    );
};

export default sectionTitle;
