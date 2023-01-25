import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 20px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  border-radius: 10px;
  z-index: 1;
`;

export const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  tr td:first-child,
  th {
    background: rgba(255, 255, 255, 0.3);
    border: none;
  }

  th {
    height: 80px;
  }

  col {
    width: 80px;
  }
`;
