import DriverProfile from "./components/DriverProfile";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <DriverProfile />
    </div>
  );
}
