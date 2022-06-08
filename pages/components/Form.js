
function Form({questionAskedHandler}) {
  return (
    <>
        <form onSubmit={questionAskedHandler}  className= 'mt-6 flex w-1/2 p-2 mx-auto bg-gray-200'>
            <input name="question" className="flex-auto pl-2" type={'text'} placeholder= {'Ask Us a Qustion'} ></input>
            <button className="ml-2 rounded-full px-4 py-2 bg-gray-400 text-gray-50 ">Ask</button>
        </form>
    </>
  )
}

export default Form