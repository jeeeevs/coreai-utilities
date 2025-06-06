export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-row gap-4">
      <iframe 
        src="/agents/research-agent/input-view"
        className="h-[600px] w-[600px] rounded-lg shadow-lg border-0"
        title="Research Input"
      />

      <iframe 
        src="/agents/writting-agent/output-view"
        className="h-[500px] w-[600px] rounded-lg shadow-lg border-0"
        title="Writing Agent"
      />

      <iframe 
        src="/agents/image-generator/output-view"
        className="h-[500px] w-[600px] rounded-lg shadow-lg border-0"
        title="Image Generator"
      />
    </div>
  );
}
