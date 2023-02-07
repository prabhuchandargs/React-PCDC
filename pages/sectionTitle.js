import React from "react";

const sectionTitle = ({ title }) => {


    return (
        <>
            <style>
                {`
                    .section-title {
                        font-weight: 700;
                        color: black;
                        text-align: center;
                    }
                `}
            </style>
            <h1 className="section-title">{title}</h1>
        </>
    );
};

export default sectionTitle;
