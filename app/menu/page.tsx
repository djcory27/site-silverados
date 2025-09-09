import menu from "../../data/menu.json";

export const metadata = { title: "Menu • Silverados Dog Park" };

export default function MenuPage(){
  return (
    <main className="section">
      <h1 className="h2">Bar Menu</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {menu.categories.map((cat:any)=>(
          <section key={cat.name} className="card p-6">
            <h2 className="text-xl font-semibold">{cat.name}</h2>
            <ul className="mt-3 space-y-2">
              {cat.items.map((it:any)=>(
                <li key={it.name} className="flex justify-between">
                  <span>{it.name}</span>
                  <span className="text-brand-olive">{it.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
