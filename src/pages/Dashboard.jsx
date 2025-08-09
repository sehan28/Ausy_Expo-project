function Dashboard() {
  const role = localStorage.getItem('role');

  return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
        <p className="mt-4 text-gray-700">
          Welcome back, {role}! Use the sidebar or navbar to manage your modules.
        </p>
      </div>
  );
}
export default Dashboard;
