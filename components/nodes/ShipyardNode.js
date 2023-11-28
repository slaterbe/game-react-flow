import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';

export const ShipyardNode = ({ data, isConnectable, id }) => {
  const { isActive } = data;

  return (
    <div className={`w-32 h-32 background bg-blue-800 p-2 rounded-md border-4 
      ${isActive ? "border-green-300" : "border-red-600"}`}>
      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" />

      <div>
        <div className="text-center text-sm">
          {data.name} {id}
        </div>
        <ResourceDetail resource={data.input} />
        <ResourceDetail resource={data.output} positive={true} />
      </div>
    </div>
  );
}
