import React from 'react';
import { InstantSearch, SearchBox, Hits, Highlight, Stats } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Searchbar.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from "framer-motion"
const searchClient = instantMeiliSearch(
 "http://localhost:7700/?populate=*"
);


const App = ({transValue}) => {
  const [query ,setQuery] = useState('')
 
  return(
  <InstantSearch
    indexName="product"
    searchClient={searchClient}
  >
<div className="search" > 

<div className="box">
{/* <Stats/> */}
<SearchBox onChange={(event) => setQuery(event.target.value)} /><KeyboardArrowUpIcon onClick={() => transValue(600)}/>
</div>
    
{query.length > 0 && (
            <div className="hit">
              <Hits hitComponent={Hit} />
            </div>
          )}
        </div>
      </InstantSearch>
  )

};

const Hit = ({ hit }) => 
<div className='main'>
  <Link to={`product/${hit.id}`} className="link">
<div className="image">

 <motion.img   whileHover={{scale:1.1}} src={process.env.REACT_APP_UPLOAD_URL +hit.img.url} alt={hit.title} height="220px" width="220px" className="img"/>
</div>
 <div className="title">

 {hit.title}
 </div>
 <div className="price">

 {hit.price}
 </div>
  </Link>
</div>





export default App