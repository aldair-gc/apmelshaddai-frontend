import { useLayoutEffect } from "react";
import { Container, Table } from "./style";

export const Agenda = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <Container>
        <Table>
          <colgroup>
            <col />
          </colgroup>
          <tr>
            <th></th>
            <th>WED</th>
            <th>SAT</th>
            <th>SUN</th>
          </tr>
          <tr>
            <td>08:00am</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10:30am</td>
            <td></td>
            <td></td>
            <td>Worship</td>
          </tr>

          <tr>
            <td>06:30pm</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </Table>
      </Container>
    </main>
  );
};
