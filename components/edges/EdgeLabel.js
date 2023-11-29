import React from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import { ResourceDetail } from '../resource/ResourceDetail';
 
export const EdgeLabel = ({ id, data, ...props }) => {
  const [edgePath, labelX, labelY] = getBezierPath(props);
 
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: '#2c5282',
            padding: 10,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
          }}
          className="nodrag nopan"
        >
          <ResourceDetail resource={data.input} positive/>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};