export default function Home() {
  const data = [
    {
      ID: "CTD-1",
      Name: "Md. Nazrul Islam",
      Birthday: "11/09/1995",
    },
    {
      ID: "CTD-2",
      Name: "Mortuza Shaory",
      Birthday: "9/12/1995",
    },
    {
      ID: "CTD-3",
      Name: "MD. Masud Rana",
      Birthday: "6/27/1995",
    },
    {
      ID: "CTD-4",
      Name: "Afroja Akter Femi",
      Birthday: "6/25/1995",
    },
    {
      ID: "CTD-5",
      Name: "Shapnil Islam Khan",
      Birthday: "6/22/1995",
    },
    {
      ID: "CTD-6",
      Name: "Kamrul Hasan Fahim",
      Birthday: "6/16/1995",
    },
    {
      ID: "CTD-7",
      Name: "Ishrat Jahan",
      Birthday: "4/14/1995",
    },
    {
      ID: "CTD-8",
      Name: "MD. Mahbubur Rahman",
      Birthday: "6/5/1995",
    },
    {
      ID: "CTD-9",
      Name: "Johirul Islam",
      Birthday: "2/15/1995",
    },
    {
      ID: "CTD-10",
      Name: "Mst. Zarin Tasnim",
      Birthday: "9/23/1995",
    },
    {
      ID: "CTD-11",
      Name: "Nayan Sarker",
      Birthday: "3/1/1995",
    },
    {
      ID: "CTD-12",
      Name: "Marufa Afrose",
      Birthday: "3/6/1995",
    },
    {
      ID: "CTD-13",
      Name: "Mohammad Shufiullah",
      Birthday: "10/18/1995",
    },
    {
      ID: "CTD-14",
      Name: "Md. Shajedur Rahman",
      Birthday: "4/22/1995",
    },
    {
      ID: "CTD-15",
      Name: "MD.Sameer Hossain",
      Birthday: "11/1/1995",
    },
    {
      ID: "CTD-16",
      Name: "Md. Tamzid Hossain",
      Birthday: "6/17/1995",
    },
    {
      ID: "CTD-17",
      Name: "Md. Amir Hossain Bappy",
      Birthday: "4/27/1995",
    },
    {
      ID: "CTD-18",
      Name: "Syeda Sadia Hasan Gunjan",
      Birthday: "11/8/1995",
    },
    {
      ID: "CTD-19",
      Name: "Tamanna Arefin",
      Birthday: "9/22/1995",
    },
    {
      ID: "CTD-20",
      Name: "Muntasir Faiyaz Munim",
      Birthday: "10/7/1995",
    },
    {
      ID: "CTD-21",
      Name: ".Maskat Khan Rojin",
      Birthday: "10/28/1995",
    },
    // DR Office
    {
      ID: "CTD-DR-1",
      Name: "Magdelin Guerrero",
      Birthday: "8/29/1995",
    },
    {
      ID: "CTD-DR-2",
      Name: "Griselt Dominguez",
      Birthday: "1/20/1995",
    },
    {
      ID: "CTD-DR-3",
      Name: "Hilsa Nunez",
      Birthday: "6/25/1995",
    },
    {
      ID: "CTD-DR-4",
      Name: "Damaris Aracena",
      Birthday: "4/10/1995",
    },
    {
      ID: "CTD-DR-5",
      Name: "Yosmeiry Vargas",
      Birthday: "11/19/1995",
    },
    {
      ID: "CTD-DR-6",
      Name: "Nicauris Reynoso",
      Birthday: "12/15/1995",
    },
    {
      ID: "CTD-DR-7",
      Name: "Laury Olivo",
      Birthday: "6/1/1995",
    },
    {
      ID: "CTD-DR-8",
      Name: "Abdias Lora",
      Birthday: "5/24/1995",
    },
    {
      ID: "CTD-DR-9",
      Name: "Nathalia Tavarez",
      Birthday: "12/1/1995",
    },
    {
      ID: "CTD-DR-10",
      Name: ".Vanessa Rodriguez",
      Birthday: "12/11/1995",
    },
    {
      ID: "CTD-DR-11",
      Name: "Jantna Vasquez",
      Birthday: "10/2/1995",
    },
    {
      ID: "CTD-DR-12",
      Name: "Vianel Colon",
      Birthday: "7/8/1995",
    },
    {
      ID: "CTD-DR-13",
      Name: "Lorianny Pena",
      Birthday: "11/6/1995",
    },
    {
      ID: "CTD-DR-14",
      Name: "Yania Cruz",
      Birthday: "1/11/1995",
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
            <th className="p-5 border-collapse border border-blue-500 bg-blue-300">
              ID
            </th>
            <th className="p-5 border-collapse border border-blue-500 bg-blue-300">
              Name
            </th>
            <th className="p-5 border-collapse border border-blue-500 bg-blue-300">
              Birthday
            </th>
            <th className="p-5 border-collapse border border-blue-500 bg-blue-300">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr>
              <td className="p-5 border-collapse border border-blue-500 bg-green-400">
                {employee.ID}
              </td>
              <td className="p-5 border-collapse border border-blue-500 bg-green-400">
                {employee.Name}
              </td>
              <td className="p-5 border-collapse border border-blue-500 bg-green-400">
                {employee.Birthday}
              </td>
              <td className="p-5 border-collapse border border-blue-500 bg-green-400">
                {ageCal(employee.Birthday)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
