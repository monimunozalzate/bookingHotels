import React, { useContext, useState } from 'react'
import BlockCategory from "../../components/blockCategory/BlockCategory"
import BlockRecommendation from "../../components/blockRecommendation/BlockRecommendation"
import SearchBar from '../../components/searchBar/SearchBar'

const Home = () => {
    
    return (
        <main >
            <SearchBar />
            <BlockCategory/>
            <BlockRecommendation/>
        </main>
    )
}

export default Home