import { shipTypes } from './shipTypes';
import { factories } from './factories';
import { shipyards } from './shipyards';
import { battleMap } from './battleMap';
import { nodes, edges } from './nodes';
import { tasks } from './tasks'
import { ui } from './ui'
import { ships, reserveEnemyShips } from './ships'
import { resourceNodes } from './resourceNodes';

export const gameState = {
  factories,
  battleMap,
  shipyards,
  resourceNodes,
  nodes,
  edges,
  tickCounter: 0,
  tasks,
  shipTypes,
  ships,
  reserveEnemyShips,
  battleMap,
  ui
}