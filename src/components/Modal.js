import Button from "./Button.js";

export default function Modal({header, dialogText, onNo, onYes}){

return (
    <div className="modal-dialog light-theme">   
     <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{header}</h4>
          <button type="button" className="close dark-theme" onClick={onNo}>&times;</button>
        </div>
        <div className="modal-body">
          <p>{dialogText}</p>
        </div>
        <div className="modal-footer">
          <Button className="btn-dark-scheme" text="No" onClick ={onNo} />
          <Button className="btn-dark-scheme" text="Yes" onClick ={onYes} />
        </div>
      </div>
      
    </div>
);
}