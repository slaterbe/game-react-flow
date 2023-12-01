import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import { toggleFactory } from '../../redux/gameStateReducer/gameStateReducer'
import { ResourceDetail } from '../resource/ResourceDetail';
import { Toggle } from '../Toggle';

const getNodeStateStyles = (nodeState) => {
  if(nodeState === 'active') return 'border-green-300'
  else if(nodeState === 'valid') return 'border-red-600'
  else return 'border-gray-300'
}

export const FactoryNode = ({ data, isConnectable, id }) => {
  const dispatch = useDispatch()

  const { name, input, output, nodeState, factoryType } = data;
  const isVisible = nodeState !== "hidden";
  const isActive = nodeState === "active";
  const isEmpty = factoryType === 'empty';

  return (
    <div className={`w-32 h-32 background bg-blue-800 p-2 rounded-md border-4 
      ${getNodeStateStyles(nodeState)}
      ${isVisible ? "" : "hidden"}`}>
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" />

      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" />

      <div>
        <div className="text-center text-sm">
          {name} {id}
        </div>
        <ResourceDetail resource={input} positive={false} />
        <ResourceDetail resource={output} positive={true} />

        {!isEmpty && <Toggle isToggle={isActive} toggle={()=> dispatch(toggleFactory(id))} />}
      </div>
    </div>
  );
}
