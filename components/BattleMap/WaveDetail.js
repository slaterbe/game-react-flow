export const WaveDetail = ({ detail, shipTypes }) => {

    const detailsMap = Object.keys(shipTypes).map(shipTypeKey => ({
        name: shipTypes[shipTypeKey].name,
        count: detail.ships[shipTypeKey]
    }))
    .filter(s => s.count > 0);

    return (
        <div>
            {
                detailsMap.map((s, index) => (
                    <span key={index}>
                        {s.name} {s.count}
                    </span>
                ))
            }
        </div>
    )
}