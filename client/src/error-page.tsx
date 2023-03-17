import { useRouteError } from "react-router-dom";
import scare from "./images/Scarecrow.png";

export const ErrorPage = () => {
  let error: any = useRouteError();
  return (
    <div id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
