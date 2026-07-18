export default function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 flex items-start justify-between shadow-sm">
      <div>
        <p className="text-sm text-zinc-400 mb-2">{label}</p>
        <p className="text-2xl font-semibold text-white">{value}</p>
      </div>
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon size={18} className="text-primary" />
        </div>
      )}
    </div>
  );
}
