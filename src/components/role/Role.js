import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
  justify-center
  my-auto
  flex
`}
`;
export const SelectContainer = styled.select`
  select::-ms-expand {
    display: none;
  }
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
export const OptionContainer = styled.option`
  ${tw`
capitalize
text-black
`}
`;
export const Text = styled.text`
  ${tw`
w-auto
text-base
text-center
capitalize
`}
`;
const Role = ({ roleArr, isCustom, role }) => {
  return (
    <Container>
      {isCustom ? (
        <SelectContainer>
          {roleArr.map((role) => (
            <OptionContainer value={role}>{role}</OptionContainer>
          ))}
        </SelectContainer>
      ) : (
        <Text>{role}</Text>
      )}
    </Container>
  );
};

Role.propTypes = {
  roleArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCustom: PropTypes.bool.isRequired,
  role: PropTypes.string,
};
export default Role;
