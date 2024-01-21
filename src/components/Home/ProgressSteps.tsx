import "../../styles/components/Home/ProgressSteps.css";


export default function ProgressSteps() {
    return (
        <section className="progress-steps">
            <h2>How we Work</h2>
            <p className="faded">We want to have our platform as simple as possible!</p>
            <div className="data">
                <div className="container">
                    <div className="progress-container">
                        <div className="progress" id="progress"></div>
                        <div className="circle">1</div>
                        <div className="circle">2</div>
                        <div className="circle">3</div>
                        <div className="circle">4</div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-item">
                        <h3>Step we do</h3>
                        <p className="faded">Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro.Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro</p>
                    </div>
                    <div className="content-item">
                        <h3>Step we do</h3>
                        <p className="faded">Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro.Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro</p>
                    </div>
                    <div className="content-item">
                        <h3>Step we do</h3>
                        <p className="faded">Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro.Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro</p>
                    </div>
                    <div className="content-item">
                        <h3>Step we do</h3>
                        <p className="faded">Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro.Lorem ipsum dolor, sit amet consectetur adipisicing elit.orro</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
