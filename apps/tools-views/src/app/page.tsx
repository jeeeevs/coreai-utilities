export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-row flex-wrap gap-4">
      <div className="flex flex-col items-start">
        <a
          href="/agents/research-agent/input-view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-2"
        >
          Open Research Input
        </a>
        <iframe
          src="/agents/research-agent/input-view"
          className="h-[600px] w-[600px] rounded-lg shadow-lg border-0"
          title="Research Input"
        />
      </div>
      <div className="flex flex-col items-start">
        <a
          href="/agents/research-agent/output-view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-2"
        >
          Open Research Output
        </a>
        <iframe
          src="/agents/research-agent/output-view"
          className="h-[600px] w-[600px] rounded-lg shadow-lg border-0"
          title="Research Output"
        />
      </div>
      <div className="flex flex-col items-start">
        <a
          href="/agents/writer-agent/output-view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-2"
        >
          Open Writing Agent
        </a>
        <iframe
          src="/agents/writer-agent/output-view"
          className="h-[500px] w-[600px] rounded-lg shadow-lg border-0"
          title="Writing Agent"
        />
      </div>
      <div className="flex flex-col items-start">
        <a
          href="/agents/image-generator/output-view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mb-2"
        >
          Open Image Generator
        </a>
        <iframe
          src="/agents/image-generator/output-view"
          className="h-[500px] w-[600px] rounded-lg shadow-lg border-0"
          title="Image Generator"
        />
      </div>
    </div>
  );
}
