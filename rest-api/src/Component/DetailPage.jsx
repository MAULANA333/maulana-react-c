import React from "react";
import { Image, Stack } from "react-bootstrap";
import { FaEbay } from "react-icons/fa";


const DetailPage = (

{
    Id
    detailCardData
}
) => {
    return (
        <>
          {
            detailCardData && (
                <Stack gap {3} className="align-items-center">
                    <image src={detailCardData.card_images[0].image_url}
                        className="img-card"
                        alt={detailCardData.id} />
                        <h2>{detailCardData.name}</h2>
                        <span className="align-self-start text=left">{detailCardData.desc}</span>
                        <Stack direction="horizontal" className="align-items-center">
                            
                        </Stack>
                </Stack>
            )
          }
        <div>
            Detail {id}
        </div>

        </>
    )
}

export default DetailPage;
