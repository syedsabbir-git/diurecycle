const Stats = () => {
  const stats = [
    { value: "50+", label: "Beta Users" },
    { value: "200+", label: "Products Listed" },
    { value: "Live", label: "On Play Store" }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 py-6">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
