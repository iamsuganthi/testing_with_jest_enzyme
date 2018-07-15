import React from 'react';

const ReviewBar = ({updateVote}) => {
    return <div>
        {
            [...new Array(5)].map((_, i) => {
                return <div className="star" key={i} onClick={() => updateVote(i + 1)}>*</div>;
            })
        }
    </div>
};

export default ReviewBar;