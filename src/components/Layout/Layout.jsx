import styled from "styled-components";

function Layout({ children }) {
  return <STLayout>{children}</STLayout>;
}
export default Layout;

const STLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
