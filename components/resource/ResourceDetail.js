const getOperator = positive => {
    if(positive === undefined) return '';

    if(positive) return '+';

    return '-';
}

const isGreenText = positive => {
    if(positive === undefined) return true;

    if(positive) return true;

    return false;
}

export const ResourceDetail = ({ resource, positive }) => {
    const operator = getOperator(positive);
    const isGreen = isGreenText(positive);

    return (
        <div>
            <div className={`inline-block text-left text-xs ${isGreen ? 'text-green-400' : 'text-red-600'}`}>
                {resource["commonOre"] !== 0 && <div> {operator} {resource["commonOre"]} Common Ore</div>}
                {resource["rareOre"] !== 0 && <div> {operator} {resource["rareOre"]} Rare Ore</div>}
                {resource["corvetteHull"] !== 0 && <div> {operator} {resource["corvetteHull"]} Corvette Hull</div>}
                {resource["corvette"] !== 0 && <div> {operator} {resource["corvette"]} Corvette</div>}
            </div>
        </div>
    );
}
