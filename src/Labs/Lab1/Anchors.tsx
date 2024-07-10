import React from "react";

interface AnchorsProps {
  showGitHub?: boolean;
}

export default function Anchors({ showGitHub = true }: AnchorsProps) {
  return (
    <div>
      <h4>Anchor tag</h4>
      Please
      <a href="https://www.lipsum.com">click here</a>
      to get dummy text
      <br />
      {showGitHub && (
        <>
          <h4>My GitHub repository</h4>
          <a href="https://github.com/thisissophiawang/kanbas-react-web-app">
            GitHub
          </a>
        </>
      )}
    </div>
  );
}
