import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../../components/LoadingIndicator';
import { UserStats, PageTitle } from './styledElements';
import { Pie } from 'react-chartjs-2';

function UserStatsDetails({ loading, userStats }) {
  return (
    <UserStats>
      <PageTitle>{`User Stats`}</PageTitle>
      {!loading ? (
        <Pie
          data={userStats}
          width={200}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </UserStats>
  );
}

UserStatsDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  userStats: PropTypes.array.isRequired,
};

export default UserStatsDetails;
