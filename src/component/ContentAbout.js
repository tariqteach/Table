import Table from "./Table";
export default function ContentAbout() {
  const AboutUS = [
    {
      Name: "Abdul Raheem",
      City: "Lahore"
    },
    {
      Name: "Muhammad Tariq",
      City: "Kahna Noh"
    },
    {
      Name: "Muhammad Billal",
      City: "Lahore"
    }
  ];
  return (
    <>
      <div>Content About</div>
      <Table item={AboutUS} />
    </>
  );
}
