import React from 'react';

const Factoid = ({rating}) => {
    return <div>
        {
            [...new Array(rating)].map((_, i) => {
                return <div className="golden-star" key={i}>*</div>;
            })
        }
        This fact is rated at {rating} out of 5
    </div>
};

export default Factoid;