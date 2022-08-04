import Display from "./Display";
import './Calculator.css';
import Button from "./Button";
import { useState } from "react";

const Calculator = () => {

    const [display, setDisplay] = useState('');
    const [op1, setOp1] = useState('');
    const [op, setOp] = useState('');

    const calculate = () => {
        let res = '';
        switch (op) {
            case '+':
                res = +op1 + +display;
                break;
            case '-':
                res = +op1 - +display;
                break;

            case '*':
                res = +op1 * +display;
                break;

            case '/':
                res = +op1 / +display;
                break;
        }

        setDisplay(res);
        setOp1(res);
        setOp('')
    }

    const onBtnClickNotify = (value, type) => {
        if (type === 'clear') {
            setOp('');
            setOp1('');
            setDisplay('');
        }
        else if (type !== 'op') {
            setDisplay(display + '' + value);
        } else {
            if (op) {
                calculate();
            } else {
                setOp1(display);
                setDisplay('');
                setOp(value);
            }
        }
    };

    return <div className="container">
        <div className="row">
            <h1 className="col-5 offset-3">Calculator</h1>
        </div>
        <div className="row">
            <div className="col-4 offset-3">
                <Display value={display} />
            </div>
        </div>
        <div className="row m-3">
            <div className="col-4 offset-3">
                <div className="row">
                    <div className="col-1">
                        <Button type="clear" value="C" onClick={onBtnClickNotify} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row m-3">
            <div className="col-4 offset-3">
                <div className="row">
                    <div className="col-1">
                        <Button type='number' value={7} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={8} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={9} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='op' value={'/'} onClick={onBtnClickNotify} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row m-3">
            <div className="col-4 offset-3">
                <div className="row">
                    <div className="col-1">
                        <Button type='number' value={4} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={5} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={6} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='op' value={'*'} onClick={onBtnClickNotify} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row m-3">
            <div className="col-4 offset-3">
                <div className="row">
                    <div className="col-1">
                        <Button type='number' value={1} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={2} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={3} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='op' value={'-'} onClick={onBtnClickNotify} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row m-3">
            <div className="col-4 offset-3">
                <div className="row">
                    <div className="col-1">
                        <Button type='number' value={0} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='number' value={'.'} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='op' value={'='} onClick={onBtnClickNotify} />
                    </div>
                    <div className="col-2 offset-1">
                        <Button type='op' value={'+'} onClick={onBtnClickNotify} />
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Calculator;
