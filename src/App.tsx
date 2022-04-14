import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: aliceblue;
`;

const StyledColor = styled.span`
  color: darkblue;
`;
const App = () => {
  return (
    <StyledBackground>
      <StyledColor>React TypeScript without CRA</StyledColor>
    </StyledBackground>
  );
};

export default App;
