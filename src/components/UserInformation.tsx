import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

const RankingList = styled.div`
  width: 320px;
  height: 48px;
  display: flex;
  align-items: center;

  animation-name: fadeUpAnime;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;

  @keyframes fadeUpAnime {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Rank = styled.div`
  width: 24px;
  text-align: center;
`

const UserIcon = styled.div<BgImageProps>`
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid rgb(255, 255, 255);
  background-image: url(${props => props.bgImage ? props.bgImage : ""});
`

const Name = styled.div`
  font-size: 16px;
`

const Score = styled.div`
  flex-grow: 1;
  text-align: right;
`

type BgImageProps = {
  bgImage?: string;
}

type UserData = {
  userID: string,
  displayName: string,
  picture: string,
  score: number
}

type Props = {
  userData: UserData[]
}

export const UserInformation = ({ userData }: Props) => {

  const [count, setCount] = useState(0)
  const [randomPointUpUserId, setRandomPointUpUserId] = useState(0)
  const inputElement = useRef(null)

  const fetchUserRank = () => {
    setInterval(() => {
      setRandomPointUpUserId(Math.floor(Math.random() * 10))
      setCount(Number((Math.random() * 1000).toFixed(0)))

      userData.sort((a, b) => b.score - a.score)
      return userData
    },  200)
  }

  useEffect(() => {
    fetchUserRank()
  }, []);

  return (
    <>
      {userData.map((v ,i) => {
        return (
          <RankingList key={v.userID}>
            <Rank>
              {i + 1}
            </Rank>
            <UserIcon bgImage={v.picture} />
            <Name>
              { v.displayName }
            </Name>
            <Score ref={inputElement} data-num={v.score}>
              { randomPointUpUserId === i
                ? v.score += count
                : v.score
              }
            </Score>
          </RankingList>
        )})
      }
    </>
  )
}