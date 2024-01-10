import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { toggleFactory, openFactoryDialog } from '../../../redux/gameStateReducer/gameStateReducer'
import { ResourceDetail } from '../../resource/ResourceDetail';
import { Toggle } from '../../Toggle';
import { BlockedNode } from './BlockedNode';

const getNodeStateStyles = (nodeState, factoryType) => {
  if (nodeState === 'active') return 'bg-blue-700'
  else if (factoryType === null) return 'bg-gray-600'
  else if (nodeState === 'valid') return 'bg-blue-700'
  else if (nodeState === 'blocked') return 'bg-gray-600'
  else return 'bg-gray-600'
}

const validToggleStates = ['active', 'valid'];

export const FactoryNode = ({ data, id }) => {
  const dispatch = useDispatch()

  const { name, input, adjustedOutput, nodeState, factoryType, isActive } = data;
  const isVisible = nodeState !== "hidden";
  const isValid = nodeState === "valid";
  const isInvalid = nodeState === "invalid";
  const isBlocked = nodeState === "blocked" && !isActive;
  const isToggleDisabled = nodeState === 'invalid';
  const isEmpty = factoryType === null;

  const showToggle = !isEmpty && validToggleStates.includes(nodeState);

  return (
    <div>
      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />

      <Handle type="source" position={Position.Right} isConnectable={true} id="sr" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Left} isConnectable={true} id="sl" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Top} isConnectable={true} id="st" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />
      <Handle type="source" position={Position.Bottom} isConnectable={true} id="sb" style={{ padding: 10, zIndex: 5, background: "rgb(30 64 175)" }} />

      <div className={`
      ${isVisible ? "" : "hidden"}
      ${isActive ? "active-animation-2" : ""}
      ${isInvalid ? "glowing-invalid" : ""}
      ${isBlocked ? "glowing-invalid" : ""}
      ${isValid ? "glowing-valid" : ""}
      w-44 h-44 m-4 rounded-md relative ${getNodeStateStyles(nodeState)}`}>
        <BlockedNode {...data} id={id}>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <ResourceDetail resource={input} positive={false} />
              <ResourceDetail resource={adjustedOutput} positive={true} />
            </div>

            <div className="my-2 flex justify-between">
              {showToggle && <Toggle
                isToggle={isActive} toggle={() => dispatch(toggleFactory(id))}
                disabled={isToggleDisabled} />}
              <Cog6ToothIcon className="h-6 w-6  text-green-500 inline-flex cursor-pointer" onClick={() => dispatch(openFactoryDialog(id))} />
            </div>
          </div>
        </BlockedNode>
      </div>
    </div>

  );
}
