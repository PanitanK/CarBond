import { useRouteError } from "react-router-dom";
import Title from './image/logo/TitleCB.png';
import { Link } from "react-router-dom";

export default function Err() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='App-header'>
      <div>
        <div className="static-bar">
          <div className="left-content">
            <Link to="/">
              <img className="title-image" src={Title} alt="Title" />
            </Link>
          </div>
        </div>
      </div>

      <div className='ErrorPage'> 
        <div className='ErrorContent'>
          <h1>No Page Found</h1>
          <a href='/'>Click here to return</a>
        </div>
      </div>
    </div>

    
  );
}

