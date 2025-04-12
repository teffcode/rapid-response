import ProductTable from "@/components/ProductTable/ProductTable";
import Header from "@/components/UI/Header";
import Aside from "@/components/UI/Aside";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Aside />

      <div className="flex-1 flex flex-col">
        <Header />

        <section className="flex-1 overflow-y-auto bg-lightGray">
          <ProductTable />
        </section>
      </div>
    </main>
  );
}
