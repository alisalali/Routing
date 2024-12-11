import React from "react";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error Page</h1>
        <p>Oops! Something went wrong.Could not found this page 404</p>
      </main>
    </>
  );
}
