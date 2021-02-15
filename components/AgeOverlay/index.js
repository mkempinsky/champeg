import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const {default: Button} = require('../Button');

const AgeOverlay = () => {
    const router = useRouter();

    const [isAnswered, handleIsAnswered] = useState(false);

    const handleAge = (value) => {
        window && window.localStorage.setItem('jnlqvhzmzmxycphl', value);
        handleIsAnswered(true);
        if (value !== true) {
            router.push('/legal-drinking-age');
        }
        return;
    };

    useEffect(() => {
        const value = window && window.localStorage.getItem('jnlqvhzmzmxycphl');
        const isTrue = value == 'true';
        const isStorageSet = value !== null;

        handleIsAnswered(isAnswered);

        if (isStorageSet && value !== isTrue) {
            router.push('/legal-drinking-age');
        }
        return;
    }, []);

    if (isAnswered) return null;

    return (
        <div className="age-overlay">
            <div className="card">
                <h3>You need to be over the age of 21 to view this site.</h3>
                <p>Are you over the age of 21?</p>
                <div className="btn-container">
                    <div>
                        <Button
                            onClick={() => handleAge(false)}
                            noCursor={true}
                            type="brown">
                            No
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => handleAge(true)}
                            noCursor={true}
                            type="brown">
                            Yes
                        </Button>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .age-overlay {
                        width: 100%;
                        height: 100vh;
                        background: rgba(000, 000, 000, 0.7);
                        position: fixed;
                        z-index: 100;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }

                    .card {
                        background: #fff;
                        max-width: 700px;
                        margin: 0 auto;
                        padding: 30px;
                    }
                    p {
                        font-size: 22px;
                    }
                    .btn-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .btn-container > div {
                        margin: 30px 15px;
                    }
                `}
            </style>
        </div>
    );
};
export default AgeOverlay;
