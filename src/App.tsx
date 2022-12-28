import styled from "styled-components"
import { UserInformation } from "./components/UserInformation";
import { userData } from "./utils/userData";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <>
      <ContentWrapper>
        <UserInformation
          userData={userData}
        />
      </ContentWrapper>
    </>
  )
}

export default App;
