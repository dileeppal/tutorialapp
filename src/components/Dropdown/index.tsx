import React from "react";
import styled from "styled-components";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Dropdown = ({ showDropdown, ...props }: any) => {
  return (
    <>
      {showDropdown ? (
        <CardContainer showDropdown={showDropdown} {...props}>
          <DropdownCard>
            <ItemWrapper>
              <EditIcon />
              <ItemText>Edit</ItemText>
            </ItemWrapper>
            <ItemWrapper>
              <DeleteIcon />
              <ItemText>Delete</ItemText>
            </ItemWrapper>
          </DropdownCard>
        </CardContainer>
      ) : null}
    </>
  );
};

export default Dropdown;

export const CardContainer = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
`;

export const DropdownCard = styled.div`
    background-color: #fff;
    border-radius: .5rem;
    margin-top: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    width: 6rem;
`;

export const ItemWrapper = styled.div`
    display: flex;
    padding: .375rem .5rem;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: #e9e9e9;
        cursor: pointer;
    }
`;
export const ItemText = styled.span`
    font-size: .75rem;
    margin-left: .25rem;
`;
export const EditIcon = styled(MdEdit)`
    font-size: 1rem;
`;
export const DeleteIcon = styled(MdDeleteForever)`
    font-size: 1rem;
`;
