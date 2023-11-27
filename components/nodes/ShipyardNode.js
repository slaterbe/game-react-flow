import { Handle, Position } from 'reactflow';

export const ShipyardNode = ({ data, isConnectable }) => {
  return (
    <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-2 border-green-300 text-center">
      <Handle type="target" position={Position.Left} isConnectable={true} id="3t" />

      <div>
        <div className="text-center text-sm">
          {data.name}
        </div>
        <div className="inline-block text-left text-xs text-green-600">
          +1 Corvette
        </div>
      </div>
    </div>
  );
}
