'use client'

// something is wrong with sign innnnnn
//will figure it out later


import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
    session: Session | null;
};
export function SessionProvider({children, session }: Props){
    return(
        <Provider>
            {children}
        </Provider>

    );
}
