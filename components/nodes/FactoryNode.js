import { Handle, Position } from 'reactflow';

export const FactoryNode = ({ data, isConnectable }) => { 
    return (
      <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-2 border-green-300">
        <Handle type="target" position={Position.Left} isConnectable={true} id="2t" />
        <Handle type="source" position={Position.Right} isConnectable={true} id="2s" />

        <div>
          <div className="inline-block text-center text-sm">
            Factory Node
          </div>
          <div className="inline-block text-left text-xs text-red-600">
            - 2 Common Ore
          </div>
          <div className="inline-block text-left text-xs text-green-600">
            + 1 Corvette Hull
          </div>
        </div>
      </div>
    );
  }
  