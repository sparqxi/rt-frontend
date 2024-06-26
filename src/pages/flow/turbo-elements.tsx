import { Edge, Node, Position } from '@xyflow/react';
import { TurboNodeData } from './TurboNode';
import FunctionIcon from './FunctionIcon';
import IndicatorIcon from './IndicatorIcon';
import { FiFile } from 'react-icons/fi';

export const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
};

export const nodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: <FunctionIcon />, title: 'SMA', subline: 'Binance' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { icon: <FunctionIcon />, title: 'Logic', subline: 'takeprofit' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 0, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Volume', subline: '60 mins' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 250, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Logic', subline: 'dca' },
    type: 'turbo',
  },
  {
     id: '5',
  position: { x: 500, y: 125 },
  data: { icon: <IndicatorIcon /> ,title: 'RSI', subline: '7 Day'},
  type: 'turbo',
    sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
},
  {
    id: '6',
    position: { x: 750, y: 125 },
    data: { icon: <FiFile />, title: 'Exchange Output' },
    type: 'turbo',
  },
   {
    id: '7',
    type: 'turbo',
    className: 'annotation',
     data: { icon: <FunctionIcon />, title: 'Note', subline: 'This is also just a node 🥳'},
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];

export const edges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2', animated: true
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
  },
];


