import React from 'react';
import Layout from "../components/layout";
import api from "../auth/axios";
import {Cards} from "../components/cards";
import {useRouter} from "next/router";
import ReactPaginate from "react-paginate";


const Properties = ({properties, currentPage, totalPages}) => {
    const router = useRouter();


    const paginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = {...router.query};
        currentQuery.page = page.selected + 1;
        router
            .push({
                pathname: currentPath,
                query: currentQuery,
            })
            .then(() => window.scrollTo(0, 0));
    };

    return (
        <Layout>
            <Cards properties={properties}/>
            <div className="paginateCenter">
                <ReactPaginate
                    onPageChange={paginationHandler}
                    initialPage={currentPage - 1}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    previousLabel="Precedent"
                    nextLabel="Suivant"
                    activeClassName="activated"
                    breakLabel="..."
                    pageClassName="paginate"
                    containerClassName="custom-paginate"
                />
            </div>
        </Layout>
    );
};


export const getServerSideProps = async ({query}) => {
    const page = query.page || 1;
    const {data} = await api.get(`/api/properties?page=${page}`);
    const properties = data.data;
    const currentPage = data.currentPage;
    const totalPages = data.totalPages;


    return {
        props: {
            properties,
            currentPage,
            totalPages,
        },
    };
};

export default Properties;
