import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';

export const ShipyardNode = ({ data, isConnectable }) => {
  return (
    <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-2 border-green-300">
      <Handle type="target" position={Position.Left} isConnectable={true} />
      <Handle type="target" position={Position.Top} isConnectable={true} />
      <Handle type="target" position={Position.Right} isConnectable={true} />
      <Handle type="target" position={Position.Bottom} isConnectable={true} />

      <div>
        <div className="text-center text-sm">
          {data.name}
        </div>
        <ResourceDetail resource={data.input} />
        <ResourceDetail resource={data.output} positive={true} />
      </div>
    </div>
  );
}
