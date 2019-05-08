import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import BackButton from '../../components/BackButton';
import {
  UserDetailsWrapper,
  PageTitle,
  UserItemRow,
  UserItemCol,
} from './styledElements';

function UserDetails(props) {
  const { user } = props;
  const userProps = Object.keys(user);

  if (!userProps || !userProps.length) {
    return null;
  }
  const filterId = arr => arr.filter(val => val !== 'id');
  const memoizedUserPorps = useMemo(() => filterId(userProps), [1]);

  return (
    <UserDetailsWrapper>
      <BackButton to={`/`}>{`Go to Posts`}</BackButton>
      <PageTitle>{`User Details`}</PageTitle>
      {memoizedUserPorps.map((prop, i) => {
        const value = user[prop];

        return (
          <UserItemRow key={prop}>
            <UserItemCol main>{prop}</UserItemCol>
            <UserItemCol>
              {prop !== 'postIds'
                ? value
                : value.map((elm, i) => (
                    <span key={elm}>{`${elm}${
                      i !== value.length - 1 ? ', ' : ''
                    }`}</span>
                  ))}
            </UserItemCol>
          </UserItemRow>
        );
      })}
    </UserDetailsWrapper>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;
