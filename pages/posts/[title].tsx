import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const titles = [
    {
      params: {
        title: "ssg-ssr",
      },
    },
    {
      params: {
        title: "pre-rendering",
      },
    },
  ];
  return {
    paths: [...titles],
    fallback: false,
  };
};

type Props = {
  postTitle: string;
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const postTitle = params.title;
  return {
    props: {
      postTitle: postTitle,
    },
  };
};

const Posts: React.VFC<Props> = (props) => {
  return (
    <>
      <h1>Posts</h1>
      <h2>{props.postTitle}</h2>
    </>
  );
};

export default Posts;
