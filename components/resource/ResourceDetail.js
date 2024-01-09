import { resourceConfigs } from '../../redux/util/resourceConfigs';

const getOperator = positive => {
    if (positive === undefined) return '';

    if (positive) return '+';

    return '-';
}

const isGreenText = positive => {
    if (positive === undefined) return true;

    if (positive) return true;

    return false;
}

export const ResourceDetail = ({ resource, positive }) => {
    const operator = getOperator(positive);
    const isGreen = isGreenText(positive);

    return (
        <div>
            <div className={`inline-block text-left text-xs`}>
                {resource && resourceConfigs
                    .filter(resourceConfig => resource[resourceConfig.id] !== 0)
                    .map((resourceConfig, index) => (
                        <div className={`inline-block m-1 px-2 py-1 rounded-full text-black font-semibold text-base
                            ${isGreen ? 'bg-green-500' : 'bg-red-300'}`}>
                            <span>{operator} {resource[resourceConfig.id]}</span>
                            <img className='inline-block w-6 h-6 ml-2' src={resourceConfig.image} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
