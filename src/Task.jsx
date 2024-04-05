 
import { useState, } from 'react';



function ManageTask() {
    const [task, settask] = useState(['javascript complition'])
    const [showadd, setshowadd] = useState(false)

    const [newItem, setnewItem] = useState('')
    const [completed, setcompleted] = useState([])
    const [done , setdone] = useState(false)
    function Add_item() {
        setshowadd(true)

    }

    function AddnewItem(e) {
        const NewItem = e.target.value
        setnewItem(NewItem)

    }
    function HandleSave() {
        settask([...task, newItem])
        setshowadd(false) // Set showadd to false to hide the input and save button
        // setshowsave(false); 

    }

    function Completed_Task(id) {

        const result = task.filter((TS, index) => index == id);
        setcompleted([...completed, result])

    }

    function DoneTask (){
        setdone(true)
    }

    return (
        <div className="Main">
            <h1>You'r Task manager</h1>

        

            {!showadd ? " "
                :

                <div className='adding_item'>
                    <h3>Add task name </h3>
                    <input type='text' id='save_Input' onChange={AddnewItem}></input>
                    <button onClick={HandleSave} className='save_button' >Save</button>
                </div>

            }

            {



                <div className=' Parent_alltask'>
                    <div className='Alltask'>

                        {task.map((ts, index) => (

                            <div className='Task_Item'>
                                <p key={index} > {ts}</p>
                                <span>
                                    <input type='checkbox' key={index} id={'checkbox_' + index} onChange={() => Completed_Task(index)}></input>
                                    <label htmlFor={'checkbox_' + index} className='checkbox-label'></label>
                                </span>
                            </div>


                        ))}

                        <button onClick={Add_item} > + Add </button>

                    </div>

                    <div className='Alltask'>

                        <button  id='Done_btn' onClick={DoneTask}> Task Done </button>


                        {
                            !done? " "
                            : completed.map((cm) => (
                                <div className='Task_Item'>
                                <p>{cm}</p>
                                </div>
                            ))

                            
                        }
                    </div>
                </div>
            }







        </div>
    )
}

export default ManageTask;