import { useRouteError } from "react-router"
const Error=()=>{
    const err=useRouteError()
    return (
        <div>Oops..!
             Error......
               COming
               <h2>{err.status+":"+err.statusText}</h2>
               </div>
              
    )
}

export default Error