import React from "react";

const FixedTitle = ({ dimensions, children }) => {
    let styles = {};
    if (dimensions.width < 992) {
        styles = {
            position: "fixed",
            top: "136px",
            right: "20px",
            textAlign: "right",
            userSelect: "none",
        };
    } else {
        styles = {
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            right: "-10px",
            textAlign: "right",
            userSelect: "none",
        };
    }

    const splitChildren = children.split(" ");

    return (
        <div style={styles}>
            {splitChildren.map((children, index) => (
                <p className='text-xl' key={index}>
                    {children}
                </p>
            ))}
        </div>
    );
};

export default FixedTitle;
