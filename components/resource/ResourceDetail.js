import { Handle, Position } from 'reactflow';

export const ResourceDetail = ({ resource, positive }) => {
    const operator = positive ? '+' : '-'

    return (
        <div>
            <div className={`inline-block text-left text-xs ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {resource["commonOre"] && <div> {operator} {resource["commonOre"]} Common Ore</div>}
                {resource["rareOre"] && <div> {operator} {resource["rareOre"]} Rare Ore</div>}
                {resource["corvetteHull"] && <div> {operator} {resource["corvetteHull"]} Corvette Hull</div>}
                {resource["corvette"] && <div> {operator} {resource["corvette"]} Corvette</div>}
            </div>
        </div>
    );
}
