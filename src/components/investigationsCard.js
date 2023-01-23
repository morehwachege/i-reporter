import React from "react";
import Investigation from "./investigation";

function InvestigationsCard({investigations, search, count }) {


    const allinvestigations = investigations.filter(item => (item.red_flag.includes(search)))

    function getInvestigations() {
        return [...allinvestigations.slice(0, count)]
    }


    const info = getInvestigations().map(item => {
        return (
           <Investigation id= {item.id} red_flag= {item.red_flag} location= {item.location} time= {item.time} date= {item.date} status= {item.status} intervention={item.intervention}/>
        )
    })
    
    return(
        <div>
            {info}
        </div>
    )

}

export default InvestigationsCard