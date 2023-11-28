import { Handle, Position } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';

export const FactoryNode = ({ data, isConnectable }) => { 
    return (
      <div className="w-32 h-32 background bg-blue-800 p-2 rounded-md border-2 border-green-300">
        <Handle type="target" position={Position.Left} isConnectable={true} id="2t" />
        <Handle type="source" position={Position.Right} isConnectable={true} id="2s" />

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
  