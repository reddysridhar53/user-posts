import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../../components/LoadingIndicator';
import { UserStats, PageTitle } from './styledElements';
const PieChart = require('react-chartjs').Pie;

function UserStatsDetails({ loading, userStats }) {
    console.log('UserStats: ', userStats);
    return (
        <UserStats>
            <PageTitle>{`User Stats`}</PageTitle>
            {
                !loading && userStats && userStats.length ? (
                    <PieChart data={userStats} redraw width="200px" height="200px" />
                ) : (
                    <LoadingIndicator />
                )
            }
        </UserStats>
    )
}

UserStatsDetails.propTypes = {
    loading: PropTypes.bool.isRequired,
    userStats: PropTypes.array.isRequired,
}

export default UserStatsDetails;