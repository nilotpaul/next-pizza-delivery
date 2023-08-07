"use client";

import { FC } from "react";
import { SessionProvider } from "next-auth/react";

type SessionProviderProps = {
  children: React.ReactNode;
};

const NextSessionProvider: FC<SessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextSessionProvider;
