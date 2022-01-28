import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import modal component
import Modal from './Modal';

//container
const Container = styled.section`
  ${tw`
  container
  mx-auto
  my-auto
  min-h-screen
  h-full
`}
`;

export default function Roles() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <button
        className='bg-cyan-500 text-white active:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Edit Roles
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}
