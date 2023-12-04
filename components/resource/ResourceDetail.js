import { resourceConfigs } from '../../redux/util/resource';

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
            <div className={`inline-block text-left text-xs ${isGreen ? 'text-green-400' : 'text-red-400'}`}>
                {resourceConfigs
                    .filter(resourceConfig => resource[resourceConfig.id] !== 0)
                    .map((resourceConfig, index) => (
                        <div key={index}> {operator} {resource[resourceConfig.id]} {resourceConfig.name}</div>
                    ))}
            </div>
        </div>
    );
}
