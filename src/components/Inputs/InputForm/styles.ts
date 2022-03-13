import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  position: relative;

  input {
    box-sizing: border-box;
    width: 100%;
    box-sizing: border-box;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--black);
    outline: none;
    transition: 0.1s ease-in-out border;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 8px 0px 8px 8px;
    -webkit-box-align: center;

    :focus {
      border: 2px solid var(--black);
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

  .input-wrapper {
    position: relative;

    .container-icon-input {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);

      i {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;
