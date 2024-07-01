import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import { Fragment } from "react";

{/* <UserButton afterSignOutUrl="/" /> */}
export default function Home() {
  return (
    <Fragment>
      <h1 className="head-text">Home</h1>
    </Fragment>
  );
}
