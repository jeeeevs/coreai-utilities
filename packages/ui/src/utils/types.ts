/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
export type FileData = {
  filename: string;
  size?: string;
  last_modified?: string;
  url: string;
  type?: string;
  uploaded_by?: {
    id: string;
    name: string;
    email: string;
  };
  description: string;
};

export type AssetPayload = {
  title: string;
  url: string;
  source: {
    id: string;
    name: string;
  };
  data: {
    asset_filename: string;
    asset_url: string;
    timestamp: number;
  }[];
};

interface InputHandler {
    id: string;
    name: string;
    type: string;
    optional: boolean;
    accepts: string[];
    parameters: {
      field: string;
      type: string;
    }[];
  }
  
  interface OutputHandler {
    id: string;
    name: string;
    type: string;
    label: string;
    optional?: boolean;
    connectsTo: string[];
  }
  
  interface InputParams {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
  }

  interface WidgetData {
    inputParams: InputParams;
    data: any
  }
export interface IAppConfig {
    id: string;
    agentUrl: string;
    widgetUrl: string;
    name: string;
    description: string;
    preview_url: string;
    appType: string;
    nodeType: string;
    inputHandlers?: InputHandler[];
    outputHandlers?: OutputHandler[];
    appSlug?: string;
    widget_url?: string;
    version?: number;
    miniapp_url?: string;
    height?: number;
    width?: number;
    minHeight?: number;
    minWidth?: number;
    defaultWidth?: number;
    defaultHeight?: number;
    widgetData?: WidgetData;
  }
export interface IncomingEdge {
    edgeId: string;
    sourceHandleId: string;
    targetHandleId: string;
    sourceBlockId: string;
    targetBlockId: string;
  }
  
export interface Workspace {
  id: string;
  state?: {};
  mode: string;
}
  
export interface IHostData {
    blockId?: string;
    projectId?: string;
    project?: {id? : string};
    workspace?: Workspace;
    client?: {id? : string};
    appConfig?: IAppConfig;
    incomingEdges?: IncomingEdge[];
  }
  
export type DataSourceType = {
    id: string;
    data: {
      fileUrl?: string;
      name: string;
    };
    type: string;
  };
  
export type Summary = {
    blockId: string;
    summaryType?: string;
    summary: string | null;
    ticker?: string;
    filename?: string;
  };