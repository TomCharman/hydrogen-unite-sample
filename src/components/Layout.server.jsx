export default function Layout({ children }) {
  return (
    <>
      <header
        role="banner"
        className="bg-contrast/80 lg:flex sticky backdrop-blur-lg z-40 top-0 justify-center w-full leading-none gap-8 px-12 py-8 font-bold"
      >
        Hydrogen Workshop
      </header>
      {children}
    </>
  );
}
