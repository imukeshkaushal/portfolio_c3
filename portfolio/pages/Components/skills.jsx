import { Badge, Stack } from "@chakra-ui/react";
import React from "react";

let skillsInfo = [
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "React",
  "Redux",
  "Chakra UI",
  "Node.js",
  "Next.js",
];
const Skills = () => {
  return (
    <div style={{ width: "90%" }}>
      <Stack
        direction="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        {skillsInfo.map((el) => {
          return (
            <>
              <Badge>{el}</Badge>
            </>
          );
        })}
      </Stack>
    </div>
  );
};

export default Skills;
