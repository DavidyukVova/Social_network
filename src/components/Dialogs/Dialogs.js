import React from 'react';
import {Row, Col} from "react-bootstrap";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let massagesElements = props.state.massages.map( massage => <Massage massage={massage.massage} id={massage.id} />);

    return (
        <Col xl={9}>
            <div className={style.dialogs}>
                <Row>
                    <Col xs={3}>
                        <div className={style.dialogsItems}>
                            { dialogsElements }
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className={style.massages}>
                            { massagesElements }
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
export default Dialogs;