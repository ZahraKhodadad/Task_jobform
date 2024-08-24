"use client"
const Error = ({error}) => {
 return ( <div className="text-red-500">{error.message}</div> );
}
 
export default Error;