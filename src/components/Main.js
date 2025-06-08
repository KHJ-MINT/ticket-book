import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import '../scss/main.scss';

const Main = () => {
    return (
        <div className="main-wrap">
            <div className="top-index-wrap">
                <ul className="index-list">
                    <li className="index-list-item schedule-idx">관람 일정</li>
                    <li className="index-list-item post-idx">관람 후기</li>
                </ul>
            </div>
            <div className="main-container">
                <h4 className="hello-text">즐거운 관람이었나요?</h4>
                {/* 아래 세 개 문장 중 하나를 랜덤으로 하나 보여주기 */}
                {/* 즐거운 관람이었나요? */}
                {/* 새로운 관람 일정이 생겼나요? */}
                {/* 오늘 관람한 공연은 어땠나요? */}
                <div className="open-btn-wrap">
                    <button className="open-btn">
                        <FontAwesomeIcon icon={faBookOpen} />
                        펼치기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;