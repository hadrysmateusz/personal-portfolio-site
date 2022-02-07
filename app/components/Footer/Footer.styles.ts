import styled from "styled-components"

export const FooterWrapper = styled.footer`
  margin-top: 220px;
  width: 100%;
  height: var(--page_header_height);
  padding: 0 42px;

  background: #19181f;
  font-size: var(--font_size__400);

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > * {
    display: flex;
    align-items: center;
    justify-content: center;

    a,
    a:visited {
      color: var(--color__text_700);
      :hover,:active {
        color: var(--color__text_900);
        
      }
    }

    :last-child {
      justify-content: flex-start;
    }

    :last-child {
      justify-content: flex-end;
    }
  }
`
