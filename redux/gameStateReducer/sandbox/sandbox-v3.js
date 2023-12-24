import { factories } from './factories';
import { shipyards } from './shipyards';
import { battleMap } from './battleMap';
import { nodes, edges } from './nodes';
import { tasks } from './tasks'
import { ui } from './ui'
import { resourceNodes } from './resourceNodes';
import { mothership } from './mothership';

export const gameState = {
  factories,
  battleMap,
  shipyards,
  mothership,
  resourceNodes,
  nodes,
  edges,
  tickCounter: 0,
  tasks,
  ui
}