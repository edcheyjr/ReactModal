import { useState } from 'react';
import Proptypes from 'prop-types';
import styles from 'styled-components';
import tw from 'twin.macro';

// MUI
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

// component
import User from './User';

import Loading from '../Loading';

import { Emails } from '../../user';
URL = 'http://localhost:3000/post';

/**
 * roles
 */
const Roles = ['admin', 'user', 'guest'];
const Groups = ['pascal', 'others'];
// styles
const ModalContainer = styles.div`
  ${tw`
  relative 
  p-6 
`}
`;

const ModalBody = styles.div`
  ${tw`
  flex
  flex-col
  px-4
`}
`;
const UserContainer = styles.div`
  ${tw`
  h-full
  w-auto
  flex
  flex-col
`}
`;
const Title = styles.div`
  ${tw`
  uppercase
  leading-snug
  text-gray-400
  font-semibold
`}
`;
const Heading = styles.div`
  ${tw`
  flex
  flex-col
  px-5
  pt-7
`}
`;
const ToggleContainer = styles.div`
  ${tw`
  flex 
  flex-row
  my-auto

`}
`;
const ToggleText = styles.div`
  ${tw`
  my-auto
text-gray-500
  mr-2
`}
`;
const Toggle = styles.div`
  ${tw`

`}
`;
const OverRallContainer = styles.div`
  ${tw`
flex 
flex-row 
gap-6
p-1
`}
`;
const TitleContainer = styles.div`
  ${tw`
flex
flex-row
justify-around
w-full
mx-1
mb-5
`}
`;

export const Select = styles.select`
  ${tw`
w-full
border-2
border-gray-300
py-1
text-center
rounded
bg-transparent
`}
`;
export const Option = styles.option`
  ${tw`
capitalize
text-black
`}
`;
const ToggleSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: cyan[500],
    '&:hover': {
      backgroundColor: alpha(cyan[500], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: cyan[500],
  },
}));

export default function Modal({ showModal, setShowModal }) {
  const [isCustom, setCustomRole] = useState(false);
  const [role, setRole] = useState('guest');
  const [group, setGroup] = useState('pascal');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const toggleRoles = () => {
    setCustomRole(!isCustom);
  };

  // label
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  // const { data, loading, error } = useUser(URL);
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-6xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <Heading>
                  <h3 className='text-xl px-5 font-semibold'>Select Role</h3>

                  <div className='flex items-start justify-between px-5 py-2 rounded-t'>
                    <ToggleContainer>
                      <ToggleText>Custom Role and Groups</ToggleText>
                      <Toggle>
                        <ToggleSwitch {...label} onClick={toggleRoles} />
                      </Toggle>
                    </ToggleContainer>
                    {isCustom || (
                      <OverRallContainer>
                        <Select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          {Roles.map((role) => (
                            <Option value={role} key={role}>
                              {role}
                            </Option>
                          ))}
                        </Select>
                        <Select
                          value={group}
                          onChange={(e) => setGroup(e.target.value)}
                        >
                          {Groups.map((group) => (
                            <Option value={group} key={group}>
                              {group}
                            </Option>
                          ))}
                        </Select>
                      </OverRallContainer>
                    )}
                  </div>
                </Heading>
                {/*body*/}
                <ModalContainer>
                  <ModalBody>
                    <TitleContainer>
                      <Title className='w-[60%]'>email</Title>
                      <Title className='w-[22%] '>role</Title>
                      <Title className='w-[17%]'>group</Title>
                    </TitleContainer>
                    <UserContainer>
                      {Emails.map((item) => (
                        <User
                          email={item.email}
                          key={item.id}
                          roleArr={Roles}
                          groupArr={Groups}
                          group={group}
                          role={role}
                          isCustom={isCustom}
                          isEmailEmpty={isEmailEmpty}
                          setIsEmailEmpty={setIsEmailEmpty}
                        />
                      ))}
                    </UserContainer>
                  </ModalBody>
                </ModalContainer>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className={`${
                      isEmailEmpty
                        ? `bg-slate-300 active:bg-slate-300`
                        : `bg-cyan-500 active:bg-cyan-500 ease-linear transition-all duration-150 shadow hover:shadow-lg shadow-cyan-500/30`
                    } text-white  font-semibold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 `}
                    type='button'
                    onClick={() => setShowModal(false)}
                    disabled={isEmailEmpty}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

Modal.propType = {
  showModal: Proptypes.bool.isRequired,
  setShowModal: Proptypes.func.isRequired,
};
