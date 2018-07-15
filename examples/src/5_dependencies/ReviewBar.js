import React from 'react';
import GoogleAnalytics from './GoogleAnalyticsWrapper';

const ReviewBar = () => {
    return <div>
        <button onClick={() => GoogleAnalytics.sendEvent('User review recorded')}>Vote</button>
    </div>
};

export default ReviewBar;