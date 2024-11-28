import SidePanel from "../components/sidepanel";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <SidePanel />
      <div className="flex">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
