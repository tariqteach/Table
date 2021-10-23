export default function Table(props) {
  return (
    <>
      <table border="2">
        <tr>
          <th>Compny CEO</th>
          <th>City</th>
        </tr>
        {props.item.map((Data) => (
          <tr>
            <td>{Data.Name}</td>
            <td>{Data.City}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
