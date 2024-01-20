import "../../styles/components/Home/Welcome.css";
import Typewriter from 'typewriter-effect';

export default function Welcome() {

    return (
        <main>
            <div className="sentences">
                <h1>Get in <span>touch</span> with</h1>
                <h2>
                    <Typewriter
                        options={{
                            strings: ['INS Productions'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
            </div>
        </main>
    );
}