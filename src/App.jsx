import { BooksGrid, Footer, Header, Navbar } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header />
        <BooksGrid />
      </main>
      <Footer />
    </>
  );
}
