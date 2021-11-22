import styled from "styled-components";

export const ShareContainer = styled.div`
      padding: 1.5rem;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: .5rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
  margin-bottom: 1rem;
`;
export const ShareWrapper = styled.div`
  padding: 0;
`;
export const ShareTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
export const Title = styled.input`
  border: 1px;
  width: 80%;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

export const Body = styled.select`
  border: none;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

export const SelectOptions = styled.option`
  border: none;
  width: 80%;

  &:focus {
    outline: none;
  }
`;


export const ShareHr = styled.hr`
  margin: 20px;
`;
export const ShareBottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ShareOptions = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const ShareOptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
export const ShareOptionsIcon = styled.label`
  font-size: 18px;
  margin-right: 3px;
`;
export const ShareOptionstext = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
export const ShareButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: green;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;