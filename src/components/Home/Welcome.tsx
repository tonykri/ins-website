import "../../styles/components/Home/Welcome.css";
import Typewriter from 'typewriter-effect';

export default function Welcome() {

    return (
        <main>
            <div className="sentences">
                <h1>Get in <span>touch</span> with <span>INS</span></h1>
                <div className="typing-sentence">
                    <h2>for&nbsp;</h2>
                    <h2>
                    <Typewriter
                        options={{
                            strings: ['Photography', 'Videography', 'Social Media Management'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                </div>
            </div>
        </main>
    );
}