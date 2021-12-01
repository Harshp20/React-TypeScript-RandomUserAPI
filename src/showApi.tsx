import React from 'react'
import Person from './Components/person'

// Props
interface Props {
    data: any,
    getApi: () => void,
    postApi?: () => void,
    deleteItem: (data:any) => void,
    clearData: () => void
    title: string,
    loading: boolean,
}

// Styles
    // Button Colours
    const btnRed = 'btn btn-danger'
    const btnBlue = 'btn btn-primary'
    const btnGreen = 'btn btn-success'
    const btnYellow = 'btn btn-warning'
    // Button Margin
    const margin10px = {marginLeft:'10px'}
    
const Api = ({data, getApi, postApi, deleteItem, title, loading, clearData}: Props) => {
    
    return (
        <>
          <div className='text-center' style={{margin: '20px'}}>

            {/* Buttons */}
            <button className={btnGreen} style={margin10px} onClick={()=>getApi()}>Get</button>
            <button className={btnYellow} style={margin10px} onClick={()=>postApi?.()}>Post</button>
            <button className={btnBlue} style={margin10px} >Put</button>
            <button className={btnRed} style={margin10px} onClick={() => clearData()} >Clear List</button>

            {/* Loading... */}
            {loading? <h6 style={{margin:'10px', color:'blue'}}><hr/>Loading...<hr/></h6> : ''}
          
            {/* GET Response Title */}
            {data.length ? <h6><hr/><i>{title} Response</i><br/> <hr/></h6>
              : loading? '' : <><br/><br/><pre><h3>List Empty</h3></pre></>
            }

            {/* Render Individual */}
            {
                data.length ? 
                    data.map((person: any) => 
                    <Person
                    human={person}
                    btnRed={btnRed}
                    key={person.name.first}
                    deleteItem={deleteItem}
                    />)
                    : ''
            }
          </div>
            {/* Display All JSON as String on view */}
            {/* {<pre>{JSON.stringify(data[0], null , 2)}</pre>} */}
        </>
      );

}

export default Api