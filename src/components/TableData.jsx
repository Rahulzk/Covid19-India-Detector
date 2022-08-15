import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Tables'

const TableData = () => {
  const [statedata, setstateData] = useState([])

  async function getCases() {
    const url = `https://api.covid19india.org/data.json`
    const data = await axios.get(`${url}`)
    // console.log(data.data.statewise)
    setstateData(data.data.statewise)
  }

  useEffect(() => {
    getCases()
  }, [])

  return (
    <>
      <div className="container">
      <table className="table col-md-8 mt-2 ">
        <thead>
          <tr className="text-center bg-info" style={{color:'white',fontFamily:'monospace'}}>
            <th scope="col" className="text-left">State</th>
            <th scope="col">Active</th>
            <th scope="col">TotalRecover</th>
            <th scope="col">TotalDeaths</th>
            <th scope="col">Confirm(last24h)</th>
            <th scope="col">Recover(last24h)</th>
            <th scope="col">Death(last24h)</th>
          </tr>
        </thead>
        <tbody>

        {

          statedata.map((curr,idx)=>{
              console.log(statedata[idx]);
              return(
                  
                  <Table data={statedata[idx]} />
              )
          })


        }
        </tbody>
      </table>
      </div>

     <footer className="bg-dark display-flex align-items-center "  style={{ height:'40px', color:'white',paddingTop:'10px' }} >
         <h6>copyright@rahul2021</h6>
     </footer>


    </>
  )
}

export default TableData
