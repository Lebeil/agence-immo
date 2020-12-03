import Layout from "../components/layout";
import React from "react";
import api from '../auth/axios'
import {PropertyVip} from "../components/propertyVip";
import Typography from '@material-ui/core/Typography';


export default function Home({propertiesVip}) {
  return (
    <>
     <Layout>
         <Typography variant="h1">Home page</Typography>
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
