import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import { toggleFactory } from '../../redux/gameStateReducer/gameStateReducer'
import { ResourceDetail } from '../resource/ResourceDetail';
import { Toggle } from '../Toggle';

const getNodeStateStyles = (nodeState) => {
  if (nodeState === 'active') return 'bg-green-900'
  else if (nodeState === 'valid') return 'bg-red-900'
  else return 'bg-gray-600'
}

const validToggleStates = ['active', 'valid'];

export const ShipyardNode = ({ data, isConnectable, id }) => {
  const dispatch = useDispatch()

  const { input, output, name, nodeState } = data;
  const isVisible = nodeState !== "hidden";
  const isToggleDisabled = nodeState === 'invalid';
  const isActive = nodeState === "active";

  return (
    <div className={`w-32 h-32 background border-blue-800 p-2 rounded-md border-4 
      ${getNodeStateStyles(nodeState)}
      ${isVisible ? "" : "hidden"}`}>
      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" />

      <div>
        <div className="text-center text-sm">
          {name} {id}
        </div>
        <ResourceDetail resource={input} positive={false}/>
        <ResourceDetail resource={output} positive={true} />
        
        {validToggleStates.includes(nodeState) && <Toggle 
          isToggle={isActive} 
          toggle={()=> dispatch(toggleFactory(id))}
          disabled={isToggleDisabled}/>}
      </div>
    </div>
  );
}
