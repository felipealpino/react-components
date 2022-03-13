import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;
  position: relative;

  select {
    width: 100%;
    box-sizing: border-box;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--black);
    outline: none;
    transition: 0.1s ease-in-out border;

    :focus {
      border: 3px solid var(--main-azul-anil-logo);
    }
  }

  label {
    width: inherit;
    font-size: 12px;
    display: flex;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
    
    .mandatory-star {
      color: var(--main-danger-color);
      font-size: 14px;
      margin-left: 3px;
    }
  }

  span {
    display: block;
    color: var(--main-danger-color);
    font-size: 11px;
  }
`;
