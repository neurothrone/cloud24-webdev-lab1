import {useEffect} from "react";
import {useLocation} from "react-router";

function PageTitle({title}: { title: string }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
}

export default PageTitle;