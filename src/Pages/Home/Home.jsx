import {Link, useNavigate} from "react-router-dom";
import {data} from "../../../data/data";
const Home = () => {
  const navidate = useNavigate();

  const nugHandler = (name) => {
    navidate("./profil/${name}");


  }
  return (
    <div>
    <h1>Home apge</h1>
    <div className="nav">
    <Link to={"/about"}> about </Link>
    <Link to={"/"}>Home</Link>
    <Link to={"/contact"}>Contact</Link>

    </div>

    <div className="wrapper">
      {data.map((nug) => (
      <div key={nug.name} onClick={() => nugHandler(nug.name)}>
        <img src={nug.image} alt="" />
        <h3>{nug.name}</h3>
      </div>
      ))}
    </div>


    </div>
  )
}

export default Home;