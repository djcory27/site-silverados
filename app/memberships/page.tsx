export const metadata = { title: "Memberships • Silverados Dog Park" };

const tiers = [
  { name: "Day Pass", price: "$8", features: ["All-day access", "Wash stations", "Live music lawn"] },
  { name: "Monthly", price: "$25", features: ["Unlimited visits", "Member specials", "Early event access"] },
  { name: "Annual", price: "$240", features: ["2 months free", "VIP line", "Member lanyard"] }
];

export default function Memberships(){
  return (
    <main className="section">
      <h1 className="h2">Memberships</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map(t=>(
          <div key={t.name} className="card p-6">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <div className="mt-2 text-3xl">{t.price}</div>
            <ul className="mt-4 space-y-2">
              {t.features.map(f => <li key={f} className="flex items-center gap-2"><span>✔</span><span>{f}</span></li>)}
            </ul>
            <button className="btn-primary mt-6 w-full">Continue</button>
          </div>
        ))}
      </div>
    </main>
  );
}
