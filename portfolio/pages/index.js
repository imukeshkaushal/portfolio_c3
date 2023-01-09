import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./Components/Profile";
import Projects from "./projects";
import Skills from "./Components/skills";
import Experience from "./experience";

export default function Home({ data, profileInfo }) {
  console.log(profileInfo);

  return (
    <ChakraProvider>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "40px", width: "50%", marginTop: "30px" }}>
          <Profile
            avatar={profileInfo.avatar_url}
            name={profileInfo.name}
            link={profileInfo.html_url}
            bio={profileInfo.bio}
            login={profileInfo.login}
          />
          <Skills />
          <Experience />
        </div>
        <div style={{ width: "100%", marginTop: "10px", marginRight: "20px" }}>
          <Projects data={data} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export async function getStaticProps(context) {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:${"imukeshkaushal"}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();
  let data2 = await fetch(`https://api.github.com/users/${"imukeshkaushal"}`);
  let profileInfo = await data2.json();

  return {
    props: { data: data.items, profileInfo },
  };
}
