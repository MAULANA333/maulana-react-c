import React from "react";
import DetailPage from "../Component/DetailPage";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPageContainer = () => {
    const { id } = useParams ();
    const [detailCardData, setDetailCardData] = useState(initialState: {});
    const cards = useSelector(selector: (state) => state.data.cards);
    
    useEffect( effect: ()=> {
        const searchedCard = cards.find((card : T ) => card.id === +id);
        
        if (searchedCard){
            setDetailCardData(searchedCard);

    }
}, deps: [id])

    return (
        <DetailPage id={id} detailCardData={detailcardData}/>
    );
};

export default DetailPageContainer;