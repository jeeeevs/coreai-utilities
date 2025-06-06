export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <iframe 
        src="/agents/InputView"
        className="h-[600px] w-[600px] rounded-lg shadow-lg border-0"
        title="Research Input"
      />
    </div>
  );
}
