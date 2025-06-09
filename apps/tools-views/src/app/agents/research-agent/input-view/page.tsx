// export default function Page() {
//   return (
//     <div className="min-h-screen bg-[#1a1f2e] p-4">
//       <div className="mt-4">
//         <iframe 
//           src="/agents/research-agent/input-view/iframe"
//           className="h-[600px] w-full rounded-lg shadow-lg border-0"
//           title="Research Agent Input"
//         />
//       </div>
//     </div>
//   );
// }

import InputView from "./InputView";
export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1f2e]">
      <InputView />
    </div>
  );
}