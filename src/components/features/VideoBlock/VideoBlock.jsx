import s from './VideoBlock.module.scss'
import playBtn from '@/assets/img/playBtn.svg'
import {useRef, useState} from "react";
import Button from "@/components/ui/Button/Button.jsx";


const VideoBlock = () => {

    const [showBtn, setShowBtn] = useState(true)
    // const videoRef = useRef()
    const videoRef = useRef(null);
    const playVideo = () => {
        console.log('sss')
        console.log(videoRef.current)
        videoRef.current.play()
        setShowBtn(false)
    }

    const videoClickHandler = () => {
        if (!showBtn) {
            videoRef.current.pause()
            setShowBtn(true)
        }
    }


    return (
        <div className={s.videoBlock}>
            <div className='container'>
                <div className={s.videoWrapper}>
                    {
                        showBtn && <button onClick={playVideo} className={s.playBtn}>
                            <img src={playBtn}/>
                        </button>
                    }
                    <video className={s.video} ref={videoRef} onClick={videoClickHandler}>
                        <source src="/assets/video/z.mp4" type="video/mp4"/>
                    </video>
                </div>

                <h2 className={s.title}>Itaque earum rerum</h2>
                <p className={s.text}>Itaque earum rerum hic tenetur a sapiente delectus, qui in ea voluptate velit
                    esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
                    pariatur.</p>
                <p className={s.text}>
                    Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil molestiae
                    consequatur, vel illum, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt, explicabo.
                    Nemo enim ipsam voluptatem, quis nostrum exercitationem ullam corporis suscipit laboriosam, velit
                    esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className={s.btnBlock}>
                    <Button type="darkGreen">Stake</Button>
                    <Button type="green">Claim</Button>
                </div>
            </div>
        </div>

    );
};

export default VideoBlock;