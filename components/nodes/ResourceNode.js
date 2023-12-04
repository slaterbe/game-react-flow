import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';

export const ResourceNode = ({ data, isConnectable, id }) => {
  const { name, output, nodeState } = data;

  const isVisible = nodeState !== "hidden";

  return (
    <div className={`w-32 h-32 background bg-green-900 p-2 rounded-md border-4 border-blue-800
    ${isVisible ? "" : "hidden"}`}>
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" />
      <div>
        <div className="text-center text-sm">
          {name} {id}
        </div>
        <ResourceDetail resource={output} positive={true} />
      </div>
    </div>
  );
}
