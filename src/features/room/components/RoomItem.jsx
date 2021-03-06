import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import RoomIcon from "@mui/icons-material/Room";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { themes } from "themes";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const showGender = (number = 3) => {
  let result;
  switch (number) {
    case 1:
      result = "Nam";
      break;
    case 2:
      result = "Nữ";
      break;

    default:
      result = "Nam và Nữ";
      break;
  }
  return result;
};

const showTypeRoom = (number = 1) => {
  let result;
  switch (number) {
    case 1:
      result = "Ký túc xá";
      break;
    case 2:
      result = "Phòng cho thuê";
      break;
    case 3:
      result = "Nhà nguyên căn";
      break;
    case 4:
      result = "Phòng ở ghép";
      break;
    default:
      result = "Căn hộ";
      break;
  }
  return result;
};

const showAddress = (numberHome, nameStress, ward, district, city) => {
  return (
    numberHome +
    " " +
    nameStress +
    ", " +
    (ward ? ward?.label + ", " : "") +
    (district ? district?.label + ", " : "") +
    (city ? city?.label : "")
  );
};

const RoomItem = (props) => {
  const history = useHistory();
  const { data, vertical } = props;
  // console.log("data", data);
  const {
    _id,
    typeRoom,
    gender,
    numberHome,
    nameStress,
    stretch,
    ward,
    district,
    city,
    priceRoom,
    images,
    verify,
  } = data;

  // console.log(_id);

  const handleShowInfoRoom = () => {
    history.push("/room/" + _id);
  };
  return (
    <Wrapper
      onClick={handleShowInfoRoom}
      className="room-item"
      vertical={vertical}
    >
      <WrapSub vertical={vertical}>
        <WrapHeader vertical={vertical}>
          <WrapImage vertical={vertical}>
            <Image src={images[0]}></Image>
            {verify && (
              <WrapIconVerified>
                <VerifiedUserIcon color="info" />
              </WrapIconVerified>
            )}
          </WrapImage>
          {vertical && (
            <WrapPrice>
              <Price>{Number.parseFloat(priceRoom / 1000000).toFixed(1)}</Price>
              <TextPrice>triệu VNĐ</TextPrice>
            </WrapPrice>
          )}
        </WrapHeader>
        <WrapContent vertical={vertical}>
          <Title>
            {showTypeRoom(typeRoom) +
              " " +
              showAddress(numberHome, nameStress, ward, district, city)}
          </Title>
          <WrapInfo>
            <WrapIcon>
              <HomeIcon />
            </WrapIcon>
            <ContentInfo>{showTypeRoom(typeRoom)}</ContentInfo>
          </WrapInfo>
          <WrapBoxHorizontal>
            <WrapInfo>
              <WrapIcon>
                <GroupIcon />
              </WrapIcon>
              <ContentInfo>{showGender(gender)}</ContentInfo>
            </WrapInfo>
            <WrapInfo>
              <WrapIcon>
                <ViewCompactIcon />
              </WrapIcon>
              <ContentInfo>{stretch} m2</ContentInfo>
            </WrapInfo>
          </WrapBoxHorizontal>
          <WrapInfo>
            <WrapIcon>
              <RoomIcon />
            </WrapIcon>
            <ContentInfo>
              {showAddress(numberHome, nameStress, ward, district, city)}
            </ContentInfo>
          </WrapInfo>
        </WrapContent>
      </WrapSub>
      {!vertical && (
        <WrapPrice>
          <Price>{Number.parseFloat(priceRoom / 1000000).toFixed(1)}</Price>
          <TextPrice>triệu VNĐ</TextPrice>
        </WrapPrice>
      )}
    </Wrapper>
  );
};

const WrapIconVerified = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const WrapSub = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
  }
`;
const WrapHeader = styled.div`
  ${(props) =>
    props.vertical &&
    "display: flex;justify-content: space-between; align-items: center; width: 100%; margin-bottom:16px;"}
`;
const TextPrice = styled.p`
  min-width: 100px;
`;
const Price = styled.p`
  font-size: 60px !important;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 30px !important;
  }
`;
const WrapPrice = styled.div`
  color: ${themes.primary};
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    display: flex;
    gap: 12px;
  }
`;
const WrapBoxHorizontal = styled.div`
  display: flex;
  gap: 16px;
`;
const Image = styled.img``;
const ContentInfo = styled.p``;
const WrapIcon = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;
const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-bottom: 8px;
`;
const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
`;
const WrapContent = styled.div`
  margin: ${(props) => (props.vertical ? "0" : "0 32px")};
  width: 100%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const WrapImage = styled.div`
  height: ${(props) => (props.vertical ? "120px" : "152px")};
  border-radius: 16px;
  overflow: hidden;
  width: 216px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  background-color: #fff;
  border-bottom: 1px solid ${themes.border};
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default RoomItem;
