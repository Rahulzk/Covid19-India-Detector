import './Table.css'

const Tables = (prop) => {  
    return (
        <>
            <tr>
                <th scope="row" className="text-left ml-10 table-info">{prop.data.state}</th>
                <td className="active table-danger"> {prop.data.active} </td>
                <td className="recover table-success">{prop.data.recovered}</td>
                <td className="death table-warning">{prop.data.deaths}</td>
                <td className="active table-danger">{prop.data.deltaconfirmed}</td>
                <td className="recover table-success">{prop.data.deltarecovered}</td> 
                <td className="death table-warning">{prop.data.deltadeaths}</td> 
            </tr>
             
        </>
    )
}

export default Tables;
