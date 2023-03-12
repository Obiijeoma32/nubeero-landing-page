// import React, { useState, useEffect } from "react";

// function ErrorBoundary(props) {
//   const [hasError, setHasError] = useState(false);
//   useEffect(() => {
//     const errorHandler = (error) => {
//       setHasError(true);
//       console.error(error);
//     };
//     window.addEventListener("error", errorHandler);
//     return () => {
//       window.removeEventListener("error", errorHandler);
//     };
//   }, []);
//   if (hasError) {
//     return <h1 className=" text ">Something went wrong.</h1>;
//   }
//   return props.children;
// }
// export default ErrorBoundary;
