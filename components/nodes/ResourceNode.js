import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';

export const ResourceNode = ({ data, isConnectable, id }) => {

  return (
    <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-4 border-green-300">
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" />
      <div>
        <div className="text-center text-sm">
          {data.name} {id}
        </div>
        <ResourceDetail resource={data.output} positive={true} />
      </div>
    </div>
  );
}
