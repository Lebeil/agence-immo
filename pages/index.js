import Layout from "../components/layout";
import React from "react";
import api from '../auth/axios'
import {PropertyVip} from "../components/propertyVip";
import {PropertyList} from "../components/propertyList";
import Carousel from "../components/carousel";
import {Paper} from "@material-ui/core";


export default function Home({propertiesVip, properties}) {
  return (
     <Layout>
         <Paper>
             <Carousel/>
             <PropertyVip properties={propertiesVip}/>
             <PropertyList properties={properties}/>
         </Paper>

     </Layout>
  )
}

export const getStaticProps = async ()=> {
    const {data: propertiesVip} = await api.get("/api/properties/vip");
    const {data} = await api.get("/api/properties?limit=6");
    const properties = data.data

    return {
        props: {
            propertiesVip,
            properties
        },
    };
};
