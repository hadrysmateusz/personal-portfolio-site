import styled from "styled-components"

export const SkillsViewWrapper = styled.div`
  em {
    font-style: normal;
    font-weight: 600;
    color: var(--color__text_700);
    //display: inline-block;
    //background: #18171d;
    //border-radius: 6px;
    //padding: 0 15px;
  }

  .skills-list {
    margin: 48px 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 32px 60px;
    justify-content: space-between;

    li {
      list-style: disc inside;
      white-space: nowrap;
      width: auto;
      
      font-weight: 700;
      color: var(--color__text_700);
      
      &::marker {
        color: var(--color__accent);
      }
    }
  }
`
