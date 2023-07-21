import React from "react";
import Head from "next/head";
const CustomHead = (props) => {
  return (
    <Head>
      {props.children}
     
      {props.canonical && <link rel="canonical" href={props.canonical} />}
      <link rel="shortcut icon" href="/assets/images/Favicon.svg" />
      
      {props.pagetitle && <title>{props.pagetitle}</title>}
      {props.metatitle && <meta name="title" content={props.metatitle} />}
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.description && <meta name="description" content={props.description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
    </Head>
  );
};

export default CustomHead;
