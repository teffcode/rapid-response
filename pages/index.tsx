import ProductTable from "../components/ProductTable";

export default function Home() {
  return (
    <main className="flex h-screen">
    <aside className="w-64 bg-light text-white p-6 flex flex-col">
      <h2 className="text-lg font-semibold text-gray mb-6">8020REI</h2>
      <nav className="flex flex-col gap-6">
        <a href="#" className="text-gray opacity-50">Dashboard</a>
        <a href="#" className="text-gray opacity-50">Buybox</a>
        <a href="#" className="text-gray opacity-50">Properties</a>
        <a href="#" className="text-gray opacity-50">Buyers</a>
        <a href="#" className="text-gray opacity-50">Skip trace</a>
        <a href="#" className="text-gray opacity-50">Fulfillment</a>
        <a href="#" className="text-gray opacity-50">Integrations</a>
        <a href="#" className="text-gray opacity-50">Tools</a>
        <a href="#" className="text-gray opacity-50">Payment</a>
      </nav>
    </aside>

    <div className="flex-1 flex flex-col">
      <header className="bg-light px-6 py-8 shadow-sm opacity-50" />

      <section className="flex-1 overflow-y-auto bg-lightGray">
        <ProductTable />
      </section>
    </div>
  </main>
  );
}
