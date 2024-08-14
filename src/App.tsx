import { useState } from "react";
import axios, { Axios } from "axios";
import Button, {
  ButtonRounded,
  ButtonRoundedSubmit,
} from "./components/Button/Button";

import Nav from "./components/Nav";

import Card from "./components/Card/Card";

import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

function App() {
  const [count, setCount] = useState(0);

  async function sayHello(url: string) {
    document.cookie = "username=John Doe";
    let formData = new FormData();
    let rawData = {
      username: "faja1",
      password: "jFa12!@#",
    };
    formData.append("username", "faja1");
    formData.append("password", "jFa12!@#");
    try {
      axios({
        url: url,
        method: "POST",
        headers: {
          Authorization: "",
        },
        data: rawData,
      })
        .then((res) => {
          console.log(res.data["token"]["accessToken"]);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    } catch (error) {
      console.log(`error last ${error}`);
    }
  }

  sayHello("http://localhost:3000/auth/login");

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
        </section>
      <section className="padding">
        <PopularProducts />
        </section>
      <section className="padding">
        <SuperQuality />
        </section>
      <section className="padding-x py-10">
        <Services />
        </section>
      <section className="padding">
        <SpecialOffer />
        </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <footer className="bg-black padding-x padding-t pb-8">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
