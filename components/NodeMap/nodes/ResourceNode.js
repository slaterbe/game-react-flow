import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../../resource/ResourceDetail';
import { BlockedNode } from './BlockedNode';

export const ResourceNode = ({ data, id }) => {
  const { name, output, nodeState } = data;

  const isVisible = nodeState !== "hidden";

  return (
    <div className={`w-32 h-32 background bg-green-900 p-2 rounded-full border-4 border-blue-800
    ${isVisible ? "" : "hidden"}`}>
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      
      <BlockedNode {...data} id={id}>
        <div>
          <div className="text-center text-sm">
            {name} {id}
          </div>
          <ResourceDetail resource={output} positive={true} />
        </div>
      </BlockedNode>
    </div>
  );
}
