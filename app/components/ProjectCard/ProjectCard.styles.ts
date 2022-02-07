import styled from "styled-components"

export const ProjectCardWrapper = styled.li`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);

  background: #16171b;
  color: #83858e;

  border-radius: 14px;
  overflow: hidden;
  
  font-size: var(--font_size__400);

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .meta-container {
    padding: 33px 26px 33px 33px;

    h3 {
      color: #ffffff;
      font-size: var(--font_size__600);
      font-weight: bold;
      
      margin-top: 6px;
      margin-bottom: 21px;
    }

    .tech-stack {
      display: flex;
      flex-direction: row;
      gap: 0;

      li {
        display: inline-block;
        color: #9a9ca5;
        font-size: var(--font_size__400);
        font-weight: bold;
        text-transform: uppercase;
        
        &:not(&:first-child)::before {
          display: inline;
          content: "•";
          color: var(--color__text_300);
          padding: 10px;
        }
      }
    }
  }
`

