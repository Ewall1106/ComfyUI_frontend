import type { ComfyWorkflowJSON } from '@/types/comfyWorkflow'

export const defaultGraph: ComfyWorkflowJSON = {
  last_node_id: 1,
  last_link_id: 0,
  nodes: [
    {
      id: 1,
      type: 'Note',
      pos: [476.33984375, 263.9296875],
      size: [380.21484375, 106.2734375],
      flags: {},
      order: 0,
      mode: 0,
      inputs: [],
      outputs: [],
      properties: {},
      widgets_values: ['测试'],
      color: '#432',
      bgcolor: '#653'
    }
  ],
  links: [],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
}

export const defaultGraphJSON = JSON.stringify(defaultGraph)

export const blankGraph: ComfyWorkflowJSON = {
  last_node_id: 0,
  last_link_id: 0,
  nodes: [],
  links: [],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
}
