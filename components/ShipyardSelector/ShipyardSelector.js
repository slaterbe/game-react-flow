import { ResourceDetail } from "../resource/ResourceDetail";

export const ShipyardSelector = ({ close, select, shipyards, node }) => (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75" onClick={close}>
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-800 p-8 rounded shadow-lg w-1/2 h-[800px]" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Change Shipyard</h2>
                    <button id="closeModalButton" className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div>
                    Available Shipyards
                </div>
                <div>
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th className="p-2">Name</th>
                                <th className="p-2">Input</th>
                                <th className="p-2">Output</th>
                                <th className="p-2">Activate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(shipyards)
                                .filter(([key]) => key !== 'empty')
                                .map(([key, value], index) => (
                                <tr className="font-semibold" key={index}>
                                    <td className="p-2">
                                        {value.name}
                                        {key === node.shipyardType &&
                                            <div className="text-xs rounded-lg bg-red-500 p-1 inline-block mx-4">
                                                ACTIVE
                                            </div>}
                                    </td>
                                    <td className="p-2">
                                        <ResourceDetail resource={value.input} positive={false} />
                                    </td>
                                    <td className="p-2">
                                        <ResourceDetail resource={value.output} positive={true} />
                                    </td>
                                    <td>
                                        {key !== node.shipyardType && <button 
                                            className="text-xs rounded bg-green-500 p-1 inline-block mx-4"
                                            onClick={() => select({ nodeId: node.id, newShipyardType: key })}>Activate</button>}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)