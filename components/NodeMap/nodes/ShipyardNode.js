import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { toggleShipyard, openShipyardDialog } from '../../../redux/gameStateReducer/gameStateReducer'
import { ResourceDetail } from '../../resource/ResourceDetail';
import { Toggle } from '../../Toggle';
import { BlockedNode } from './BlockedNode';

const getNodeStateStyles = (nodeState) => {
  if (nodeState === 'active') return 'bg-green-900'
  else if (nodeState === 'valid') return 'bg-red-900'
  else return 'bg-gray-600'
}

const validToggleStates = ['active', 'valid'];

export const ShipyardNode = ({ data, id }) => {
  const dispatch = useDispatch()

  const { input, output, name, nodeState, completePercentage } = data;
  const isVisible = nodeState !== "hidden";
  const isToggleDisabled = nodeState === 'invalid';
  const isActive = nodeState === "active";

  return (
    <div className={`w-80 h-80 m-4 background border-blue-800 p-1 rounded-md border-4
      ${getNodeStateStyles(nodeState)}
      ${isVisible ? "" : "hidden"}`}>
      <Handle type="target" position={Position.Right} isConnectable={true} id="tr" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Left} isConnectable={true} id="tl" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Top} isConnectable={true} id="tt" style={{ padding: 10, background: "rgb(30 64 175)" }} />
      <Handle type="target" position={Position.Bottom} isConnectable={true} id="tb" style={{ padding: 10, background: "rgb(30 64 175)" }} />

      <BlockedNode {...data} id={id}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <ResourceDetail resource={input} positive={false} />
            <ResourceDetail resource={output} positive={true} />
          </div>

          <div>
            <div className="my-2 flex justify-between">
              {validToggleStates.includes(nodeState) && <Toggle
                isToggle={isActive}
                toggle={() => dispatch(toggleShipyard(id))}
                disabled={isToggleDisabled} />}
              <Cog6ToothIcon className="h-6 w-6  text-green-500 inline-flex cursor-pointer" onClick={() => dispatch(openShipyardDialog(id))} />
            </div>

            <div className="m-2 bg-black round-full text-center">
              <div className="bg-blue-500 h-8" style={{ width: `${completePercentage}%` }}></div>
            </div>
          </div>
        </div>
      </BlockedNode>
    </div>
  );
}
