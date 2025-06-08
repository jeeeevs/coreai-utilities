export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] p-4">
      <div className="mt-4">
        <iframe 
          src="/agents/research-agent/output-view/iframe"
          className="h-[600px] w-full rounded-lg shadow-lg border-0"
          title="Research Agent Output"
        />
      </div>
    </div>
  );
}