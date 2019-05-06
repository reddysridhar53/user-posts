import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import {
    UserDetailsWrapper,
    PageTitle,
    UserItemRow,
    UserItemCol,
} from "./styledElements";

function UserDetails(props) {
    const { user } = props;
    const userProps = Object.keys(user);

    if (!userProps || !userProps.length) {
        return null;
    }
    const filterId = arr => arr.filter( val => val !== 'id' ); 
    const memoizedUserPorps = useMemo(() => filterId(userProps), [1]);

    return (
        <UserDetailsWrapper>
            <PageTitle>{`User Details`}</PageTitle>
            {
                memoizedUserPorps.map( prop => {
                    const value = user[prop];

                    return (
                        <UserItemRow key={prop}>
                            <UserItemCol main>{prop}</UserItemCol>
                            <UserItemCol>
                                { 
                                    prop !== 'postIds' ? (
                                        value
                                    ) : (
                                        value.map((elm,i) => <span>{`${elm}${i !== value.length - 1 ? ', ' : ''}`}</span>)
                                    )
                                }
                            </UserItemCol>
                        </UserItemRow>
                    );
                })
            }
        </UserDetailsWrapper>
    );
}

UserDetails.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserDetails;
