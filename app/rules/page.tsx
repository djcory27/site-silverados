export const metadata = { title: "Rules • Silverados Dog Park" };

const rules = [
  "Dogs must be current on vaccinations.",
  "Owners supervise at all times; leash on entering/exiting.",
  "Clean up after your dog — bags provided.",
  "Separate small/large zones; respect posted signs.",
  "No aggressive behavior; follow staff instructions.",
  "Under 18 must be accompanied by an adult.",
  "No outside alcohol. Enjoy our full bar!",
];

export default function RulesPage(){
  return (
    <main className="section">
      <h1 className="h2">Park Rules & Safety</h1>
      <ol className="mt-6 list-decimal space-y-3 pl-6">
        {rules.map((r)=> <li key={r} className="card p-4">{r}</li>)}
      </ol>
    </main>
  );
}
