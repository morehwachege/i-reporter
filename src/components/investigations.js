import React, { useState, useEffect } from "react";
import InvestigationsCard from "./investigationsCard";
import Search from "./Search";
import "./investigations.css"

function Investigations() {

    const [investigations, setInvestigations] = useState([])
    const [search, setSearch] = useState([])
    const [count, setCount] = useState(3)

    useEffect(() => {

        fetch('https://irepoter-backend-production.up.railway.app/reports')
            .then(response => response.json())
            .then(data => setInvestigations(data))
            .catch(err => console.error(err));
    }, []);



    function handleClick() {
        setCount(count + 2)
        console.log(count + 2)
    }

    function isDisabled() {
        return count * 1 >= investigations.length
    }

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <div className="investigationsleftbox"><div className="leftbox">"STUFF STUFF MORE STUFF gdshykfugytdfxfcvhdfthikjdzkgfuys,gfgfmrdgdfmhfgjrdkusszrlhifzjliuesgddKFSAYHJZGDKADafFFFDHGDAhf,kujg,jfg,kj,."</div></div>
            <div className="eachbox">
                <InvestigationsCard investigations={investigations} search={search} count={count} />
                <button
                    onClick={handleClick}
                    disabled={isDisabled()}
                >Load more....
                </button>
            </div>
        </div>
    )
}

export default Investigations