import PropTypes from 'prop-types';
import { Text, Container, SelectContainer, OptionContainer } from './Role';

const Group = ({ groupArr, isCustom, group }) => {
  return (
    <Container>
      {isCustom ? (
        <SelectContainer>
          {groupArr.map((group) => (
            <OptionContainer value={group}>{group}</OptionContainer>
          ))}
        </SelectContainer>
      ) : (
        <Text>{group}</Text>
      )}
    </Container>
  );
};
Group.propTypes = {
  groupArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCustom: PropTypes.bool.isRequired,
  group: PropTypes.string,
};
export default Group;
