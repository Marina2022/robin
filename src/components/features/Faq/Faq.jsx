import s from './Faq.module.scss';
import faqImg from '@/assets/img/faq.png'
import poweredBy from '@/assets/img/poweredBy.svg'
import faqSpot from '@/assets/img/faqSpot.png'
const Faq = () => {
    return (
        <div className={s.faq}>
            {/*<img className={s.faqSpot} src={faqSpot}/>*/}
            <div className="container">
                <img className={s.img} src={faqImg} alt="faq image"/>
                <ul className={s.faqList}>
                    <li className={s.faqItem}>
                        <p className={s.faqItemNumber}>1. How to stake?</p>
                        <p className={s.faqItemText}>Itaque earum rerum hic tenetur a sapiente delectus, qui in ea
                            voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                            quo voluptas nulla pariatur.</p>
                        <p className={s.faqItemText}>
                            Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil
                            molestiae consequatur, vel illum, quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt, explicabo. </p>
                        <p className={s.faqItemText}>
                            Nemo enim ipsam voluptatem, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                    <li className={s.faqItem}>
                        <p className={s.faqItemNumber}>2. How to stake?</p>
                        <p className={s.faqItemText}>Itaque earum rerum hic tenetur a sapiente delectus, qui in ea
                            voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                            quo voluptas nulla pariatur.</p>
                        <p className={s.faqItemText}>
                            Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil
                            molestiae consequatur, vel illum, quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt, explicabo. </p>
                        <p className={s.faqItemText}>
                            Nemo enim ipsam voluptatem, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                    <li className={s.faqItem}>
                        <p className={s.faqItemNumber}>3. How to stake?</p>
                        <p className={s.faqItemText}>Itaque earum rerum hic tenetur a sapiente delectus, qui in ea
                            voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                            quo voluptas nulla pariatur.</p>
                        <p className={s.faqItemText}>
                            Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil
                            molestiae consequatur, vel illum, quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt, explicabo. </p>
                        <p className={s.faqItemText}>
                            Nemo enim ipsam voluptatem, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                </ul>

            </div>
            <div className={s.poweredBy}>
                <p>
                    Powered by
                </p>
                <img src={poweredBy} alt="posered by img"/>
            </div>
        </div>
    );
};

export default Faq;