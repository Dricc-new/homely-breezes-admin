import { EPublishState } from "./interface";

export function PublishState(state: EPublishState) {
    return <span className={`border px-3 py-1 rounded ${state === EPublishState.Publish ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}> {state} </span>
}