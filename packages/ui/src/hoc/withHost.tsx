"use client";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { IHostData } from "../utils/types";

// Define the props for the wrapped component

export interface IncomingBlock {
  id: string; // Assuming 'id' is a string
  name: string; // Assuming 'name' is also a string
}
export interface WrappedComponentProps {
  incomingData: { [key: string]: { data: any; source: any } };
  hostData: IHostData;
  // eslint-disable-next-line no-unused-vars
  sendOutput: (outputHandlerId: string, payload: any) => void;
  // eslint-disable-next-line no-unused-vars
  sendAlxMessage: (message: string) => void;
  alxData: any;
  // eslint-disable-next-line no-unused-vars
}

// Define the props that the HOC will inject
export interface InjectedProps {
  filename?: string;
  url?: string;
}
export interface InjectedPropsDataSense {
  id: string;
  selected: boolean;
  data: any;
}

// Higher Order Component
function withHost<P extends WrappedComponentProps>(
  WrappedComponent: React.FC<P>
) {
  return function WithHost(props: InjectedProps) {
    const blockSdkInstance = useRef<any>();
    const widgetRef = useRef<HTMLDivElement>(null);
    const [incomingData, setIncomingData] = useState<{
      [key: string]: { data: any; source: any };
    }>({});
    const [hostData, setHostData] = useState<IHostData>({});
    const [alxData, setAlxData] = useState<any>({});

    const onIncomingData = (event: any, data: any) => {
      const targetHandleId = data.targetHandleId;
      setIncomingData((incomingData) => ({
        ...incomingData,
        [targetHandleId]: { data: data.payload.data, source: data.source },
      }));
    };

    const onHostDataUpdate = (event: any, hostData: any) => {
      setHostData((data) => {
        const newData = {
          blockId: event.receivingBlockId,
          ...data,
          ...hostData,
        };
        return newData;
      });
    };

    const onAlxData = (event: any, data: any) => {
      setAlxData((prevData: any) => ({
        ...prevData,
        ...data,
      }));
    };

    const sendOutput = (outputHandlerId: string, data: any) => {
      blockSdkInstance.current?.sendOutput(outputHandlerId, data);
    };

    const sendAlxMessage = (message: any) => {
      blockSdkInstance.current?.sendAlxMessage(message);
    };

    useEffect(() => {
      if (hostData.incomingEdges?.length === 0) {
        setIncomingData({});
      }
    }, [hostData]);

    useEffect(() => {
      if ((window as any).BlockSdk) {
        (async () => {
          try {
            const instance = await (window as any).BlockSdk.register({
              onIncomingData: onIncomingData,
              onHostDataUpdate: onHostDataUpdate,
              onAlxData: onAlxData,
            });

            if (instance) {
              instance.resizeObserver(widgetRef.current);
              blockSdkInstance.current = instance;
            }
          } catch (error) {
            console.error("Error registering BlockSdk:", error);
          }
        })();
      }
    }, []);

    return (
      <div ref={widgetRef}>
        <Script
          src="https://unpkg.com/@psnext/block-sdk@0.0.25/dist/block-sdk.js"
          strategy="beforeInteractive"
        />
        <WrappedComponent
          {...(props as P)}
          incomingData={incomingData}
          hostData={hostData}
          sendOutput={sendOutput}
          alxData={alxData}
          sendAlxMessage={sendAlxMessage}
        />
      </div>
    );
  };
}
export default withHost;
