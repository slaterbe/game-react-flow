import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { toggleFactory, openFactoryDialog } from '../../../redux/gameStateReducer/gameStateReducer'
import { ResourceDetail } from '../../resource/ResourceDetail';
import { Toggle } from '../../Toggle';

const getNodeStateStyles = (nodeState, factoryType) => {
  if (nodeState === 'active') return 'bg-green-900'
  else if (factoryType === 'empty') return 'bg-gray-600'
  else if (nodeState === 'valid') return 'bg-red-900'
  else return 'bg-gray-600'
}

const validToggleStates = ['active', 'valid'];

export const FactoryNode = ({ data, isConnectable, id }) => {
  const dispatch = useDispatch()

  const { name, input, output, nodeState, factoryType } = data;
  const isVisible = nodeState !== "hidden";
  const isActive = nodeState === "active";
  const isToggleDisabled = nodeState === 'invalid';
  const isEmpty = factoryType === 'empty'

  return (
    <div className={`w-32 h-32 background border-blue-800 p-2 rounded-md border-4 
      ${getNodeStateStyles(nodeState, factoryType)}
      ${isVisible ? "" : "hidden"}`}>

      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      
      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" style={{ padding: 10, background: "rgb(30 64 175)" }} />

      <div>
        <div className="text-center text-sm">
          {name} {id}
        </div>

        <ResourceDetail resource={input} positive={false} />
        <ResourceDetail resource={output} positive={true} />

        <div className="my-2 flex justify-between">
          {!isEmpty && validToggleStates.includes(nodeState) && <Toggle
            isToggle={
              isActive} toggle={() => dispatch(toggleFactory(id))}
            disabled={isToggleDisabled} />}
          <Cog6ToothIcon className="h-6 w-6  text-green-500 inline-flex cursor-pointer" onClick={() => dispatch(openFactoryDialog(id))} />
        </div>
      </div>
    </div>
  );
}
