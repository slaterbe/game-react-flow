import React from 'react';
import { useDispatch } from 'react-redux';
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import { ResourceDetail } from '../../resource/ResourceDetail';
import { deleteEdge } from '../../../redux/gameStateReducer/gameStateReducer'

export const EdgeLabel = ({ id, data, source, target, ...props }) => {
  const [edgePath, labelX, labelY] = getBezierPath(props);
  const dispatch = useDispatch();

  return (
    <>
      <BaseEdge id={id} path={edgePath} {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: '#2c5282',
            padding: 5,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <ResourceDetail resource={data.input} />
          <button
            className="text-xs rounded bg-red-500 mt-1 p-1 inline-block mx-4 z-10"
            onClick={() => dispatch(deleteEdge({ source: source, target: target }))}>Delete</button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};