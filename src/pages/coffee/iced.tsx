import { NextPage } from "next";
import { HotCard, IcedCard } from "../../components";

const IcedPage: NextPage = () => {
    return (
        // 형제 요소는 부모요소 하나로만 감싸줘야 한다.
        <div>
            <h1>IcedPage</h1>
            <hr />
            <IcedCard />
            <HotCard />
        </div>
    )
}

export default IcedPage;