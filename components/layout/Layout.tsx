import React, { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen text-primary bg-slate-50 ">
            <Header />
            <main className="flex w-full flex-1 flex-col">{children}</main>
            <Footer />
        </div>
    );
};
