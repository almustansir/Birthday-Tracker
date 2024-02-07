export default function Home() {
  const data = [
    {
      ID: "CTD-311",
      Name: "Samius S",
      Birthday: "02/01/1994",
      // 30years and 6 days old.
    },
    {
      ID: "CTD-312",
      Name: "Dion P",
      Birthday: "02/08/1995",
      // 28years, 11 months, and 30 days old.
    },
    {
      ID: "CTD-313",
      Name: "Affif H",
      Birthday: "02/20/1997",
      // 26years, 11 months, and 18 days old.
    },
    {
      ID: "CTD-314",
      Name: "Rafi N",
      Birthday: "11/23/1992",
      // 26years, 11 months, and 18 days old.
    },
    {
      ID: "CTD-315",
      Name: "Rohan T",
      Birthday: "04/11/1999",
      // 26years, 11 months, and 18 days old.
    },
  ];
  const today = new Date();
  const ageCal = (date: string) => {
    const bday = new Date(date);
    const diff = today.getTime() - bday.getTime();
    const years = Math.floor(diff / 31556736000),
      //1 day has 86400000 milliseconds
      days_diff = Math.floor((diff % 31556736000) / 86400000),
      //1 month has 30.4167 days
      months = Math.floor(days_diff / 30.4167),
      days = Math.floor(days_diff % 30.4167);
    return `${years} years, ${months} months, ${days} days`;
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5">Birthdays</h1>
      <table className="table-auto mx-auto mt-10 border-collapse border border-blue-500">
        <thead>
          <tr>
            <th className="p-5 border-collapse border border-blue-500">ID</th>
            <th className="p-5 border-collapse border border-blue-500">Name</th>
            <th className="p-5 border-collapse border border-blue-500">
              Birthday
            </th>
            <th className="p-5 border-collapse border border-blue-500">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr>
              <td className="p-5 border-collapse border border-blue-500">
                {employee.ID}
              </td>
              <td className="p-5 border-collapse border border-blue-500">
                {employee.Name}
              </td>
              <td className="p-5 border-collapse border border-blue-500">
                {employee.Birthday}
              </td>
              <td className="p-5 border-collapse border border-blue-500">
                {ageCal(employee.Birthday)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
