import Layout from "../components/layout";
import React from "react";
import api from '../auth/axios'
import {PropertyVip} from "../components/propertyVip";
import Carousel from "../components/carousel";


export default function Home({propertiesVip}) {
  return (
    <>
     <Layout>
         <Carousel/>
         <PropertyVip properties={propertiesVip}/>
     </Layout>
    </>
  )
}

export const getStaticProps = async ()=> {
    const {data: propertiesVip} = await api.get("/api/properties/vip");

    return {
        props: {
            propertiesVip
        },
    };
};
