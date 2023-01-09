import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import Projects from "./Components/projects";

const Page = ({ data }) => {
  return (
    <ChakraProvider>
      <div style={{ width: "95%", margin: "auto", marginBottom: "30px" }}>
        <h1
          align="center"
          style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "22px" }}
        >
          Projects
        </h1>
        <Projects data={data} />
      </div>
    </ChakraProvider>
  );
};

export default Page;

export async function getStaticProps(context) {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:${"imukeshkaushal"}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();
  return {
    props: { data: data.items },
  };
}
