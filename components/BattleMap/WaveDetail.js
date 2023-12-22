export const WaveDetail = ({ detail, shipTypes }) => {

    const detailsMap = Object.keys(shipTypes).map(shipTypeKey => ({
        name: shipTypes[shipTypeKey].name,
        count: detail.ships[shipTypeKey]
    }))
    .filter(s => s.count >= 0);

    const test = Object.values(shipTypes);

    return (
        <div>
            {
                detailsMap.map(s => (
                    <span>
                        {s.name} {s.count}
                    </span>
                ))
            }
        </div>
    )
}