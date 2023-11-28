import { Handle, Position } from 'reactflow';

export const ResourceNode = ({ data, isConnectable }) => {
    return (
      <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-2 border-green-300 text-center">
        <Handle type="source" position={Position.Right} isConnectable={true}/>
        <Handle type="source" position={Position.Left} isConnectable={true} />
        <Handle type="source" position={Position.Top} isConnectable={true} />
        <Handle type="source" position={Position.Bottom} isConnectable={true} />
        <div>
          <div className="inline-block align-middle">
            {data.name}
          </div>
        </div>
      </div>
    );
  }
  