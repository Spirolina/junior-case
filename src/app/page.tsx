"use client";
import InputField from "@/components/InputField";
import Image from "next/image";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Countries from "@/components/Countries";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto mt-8 flex justify-center gap-16">
        <Countries />
      </div>
    </ApolloProvider>
  );
}
