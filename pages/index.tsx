import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout"
import { NextPage } from "next";
import { postDataResult } from "../types";

const Home: NextPage<{allPostsData: Array<postDataResult>}> = ({allPostsData}: {allPostsData: Array<postDataResult>}) => {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
    </Layout>
  )
};

export default Home;
