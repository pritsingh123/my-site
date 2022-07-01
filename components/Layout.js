import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>
          <Head>
            <title>First Next App</title>
            <meta name="keywords" content="web developments" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
              crossorigin="anonymous"
            />
          </Head>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
