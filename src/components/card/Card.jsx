import "./_styleCard.scss";
import { objImg } from "../../utils/img";
export default function Card({ style, name, academic, opinion, history }) {
  
  
    return (
    <div className={`container __card${style}`}>
      <div className="imgCard">
        <img src={objImg[name]} alt="" />
        <div className="name_titleCard">
          <p>{name}</p>
          <p className="academic">{academic}</p>
        </div>
      </div>

      <div className={`container __card${style} __info`}>
        <div>
          <p className="Opinion">{opinion}</p>
          <p className="Story">"{history}"</p>
        </div>
      </div>
    </div>
  );
}
