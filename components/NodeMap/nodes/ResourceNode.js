import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../../resource/ResourceDetail';
import { BlockedNode } from './BlockedNode';

export const ResourceNode = ({ data, id }) => {
  const { name, output, nodeState, adjustedOutput } = data;

  const isVisible = nodeState !== "hidden";
  const isActive = nodeState === "active";

  return (
    <div>
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      
      <div className={`w-32 h-32 background bg-green-900 m-4 p-2 rounded-full border-blue-800
        after:rounded-full
        ${isActive ? "active-animation-2" : ""}
        ${isVisible ? "" : "hidden"}`}>

        <BlockedNode {...data} id={id}>
          <div className='pt-4'>
            <ResourceDetail resource={adjustedOutput} positive={true} />
          </div>
        </BlockedNode>
      </div>
    </div>
  );
}
