import React from "react";
import Webcam from "react-webcam";

class ChessBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenshot: null,
        }
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imgCapture = this.webcam.getScreenshot();
        this.setState({ screenshot: imgCapture });
    };


    render() {

        return (
            <div className="App">
                <div>
                    <h3>Take screenshot</h3>
                    <Webcam
                        audio={false}
                        height={350}
                        width={350}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                    />
                    <button onClick={() => this.capture()}>Capture photo</button>
                </div>
                {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
            </div>
        );
    }
}

export default ChessBoard;