import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import Role from './Role';
import Group from './Group';

// icon
import CancelIcon from '@mui/icons-material/Cancel';

const RowContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-around
    w-[640px]
  `}
`;

const RoleContainer = styled.div`
  ${tw`
  my-auto
  h-full
  w-1/5
  mx-5
`}
`;
const GroupContainer = styled(RoleContainer)`
  ${tw`
  px-4
`}
`;

const UserContainer = styled.div`
  ${tw`
  h-full
  w-3/5
  cursor-pointer
  text-base
  py-3
  px-2
hover:bg-gray-200/80
  bg-transparent
  flex
  flex-row
`}
  input {
    ${tw`
    container
    outline-none
    focus:outline-none
    bg-transparent
    mr-1
`}
  }
`;

const User = ({
  email,
  roleArr,
  isCustom,
  role,
  group,
  groupArr,
  isEmailEmpty,
  setIsEmailEmpty,
}) => {
  const [emailAddress, setEmailAddress] = useState(email);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <RowContainer>
      <UserContainer
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
      >
        <input
          type='text'
          placeholder='example@gmail.com'
          value={emailAddress}
          onMouseEnter={() => setIsFocus(true)}
          onMouseLeave={() => setIsFocus(false)}
          onChange={({ target }) => {
            setEmailAddress(target.value);
            if (!target.value) {
              setIsEmailEmpty(true);
            } else {
              setIsEmailEmpty(false);
            }
          }}
        />
        {isFocus && !isEmailEmpty && (
          <CancelIcon
            onMouseEnter={() => setIsFocus(true)}
            onMouseLeave={() => setIsFocus(false)}
            color='disabled'
            onClick={() => {
              setEmailAddress('');
              setIsEmailEmpty(true);
            }}
            type='button'
          />
        )}
      </UserContainer>
      <RoleContainer>
        <Role roleArr={roleArr} role={role} isCustom={isCustom} />
      </RoleContainer>
      <GroupContainer>
        <Group groupArr={groupArr} group={group} isCustom={isCustom} />
      </GroupContainer>
    </RowContainer>
  );
};
User.propTypes = {
  email: PropTypes.string.isRequired,
  roleArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  groupArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  group: PropTypes.string,
  role: PropTypes.string,
  isCustom: PropTypes.bool.isRequired,
  setIsEmailEmpty: PropTypes.func.isRequired,
};
export default User;
