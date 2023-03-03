import React, { useState, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from '../Card/Card'
import './List.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][catagories][id]=${catId}${subCats.map(item=>`&[filters][subcategories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(data?.length / 3)
  const [bages, setBages] = useState([])

  useEffect(() => {
    setBages(totalPages ? Array(totalPages).fill(1) : [])
  }, [data, totalPages])

  const pageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <div className='list'>
      {loading ? (
        <div className='loading'>

          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="front">
            {data?.slice(page * 3 - 3, page * 3).map(item => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <div className="back">
            <div className="pagination">
              <span className={page === 1 ? "rev" : "prev"} onClick={() => pageHandler(page - 1)}>
                <ArrowBackIcon />Previous
              </span>
              {bages.length > 0 &&
                bages.map((_, i) => (
                  <span
                    className={page === i + 1 ? "boxes" : "foxes"}
                    onClick={() => pageHandler(i + 1)}
                    key={i}
                  >
                    {i + 1}
                  </span>
                ))}
              <span className={page === totalPages ? "ex" : "nex"} onClick={() => pageHandler(page + 1)}>
                Next<ArrowForwardIcon />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default List
