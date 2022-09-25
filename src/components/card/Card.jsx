import "./_styleCard.scss";
import { objImg } from "../../utils/img";
export default function Card({ style, img, name, academic, opinion, history }) {
  
  
  
  
  
    return (
    <div className={`container __card${style}`}>
      <div className="imgCard">
        <img src={img} alt="" />
        <div className="name_titleCard">
          <p>{name}</p>
          <p>{academic}</p>
        </div>
      </div>

      <div className="container __info">
        <div>
          <p className="Opinion">{opinion}</p>
          <p className="Story">{history}</p>
        </div>
      </div>
    </div>
  );
}
