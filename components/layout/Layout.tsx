import React, { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-black flex w-full flex-1 flex-col items-center justify-center px-20 text-center">{children}</main>
            <Footer />
        </div>
    );
};
