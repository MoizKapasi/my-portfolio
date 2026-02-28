import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .experiences {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: visible;
    margin: 0 2rem; /* Added margin to prevent edge content from being cut */

    .experience {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      max-width: 100%; /* Added to prevent horizontal overflow */
      word-wrap: break-word; /* Added to handle long text */

      &:hover {
        transform: translateY(-7px);
        background-color: var(--green);
        box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
      }

      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;
        
        svg {
          min-width: 50px;
        }

        .duration {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 1.2rem;
          color: #fff;
          white-space: nowrap;
        }
      }

      .body {
        h3 {
          margin-bottom: 0.5rem;
          word-wrap: break-word;
          font-size: 2.2rem;
        }
        
        .company {
          color: var(--green);
          margin-bottom: 2rem;
          font-weight: 500;
          font-size: 1.6rem;
        }
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        word-wrap: break-word;

        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        width: 100%; /* Added to ensure proper footer width */
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap; /* Added to allow technology tags to wrap */

          li {
            white-space: nowrap; /* Added to prevent tech stack items from breaking */
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .experiences {
      grid-template-columns: 1fr 1fr;
      margin: 0 1rem;
    }
  }

  @media (max-width: 740px) {
    .experiences {
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;
