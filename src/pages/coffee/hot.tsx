import { NextPage } from "next";
import {HotCard} from "../../components/HotCard";


const HotPage: NextPage = () => {
    return (
        <div>
            <h1>HotPage</h1>
            <hr />
            <HotCard />
        </div>
    )
}

export default HotPage;