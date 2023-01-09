import Link from "next/link";
import React from "react";

const SingleProject = ({ reponame, starc, forkc, language, link }) => {
  return (
    <div
      style={{ border: "2px solid gray", padding: "20px", borderRadius: "7px" }}
    >
      <Link style={{ fontWeight: "bold" }} href={link}>
        <h3>{reponame}</h3>
      </Link>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>forks : {forkc}</div>
          <div>stars : {starc}</div>
        </div>
        <div style={{ marginTop: "10px" }}>Languages : {language}</div>
      </div>
    </div>
  );
};

export default SingleProject;
