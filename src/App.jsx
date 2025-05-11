import Form from './components/Form';

export default function App() {
  return (
    <div className="w-screen min-h-screen  flex flex-col items-center justify-start overflow-auto">
      <h2 className="text-xl font-semibold text-center mt-6 mb-1 py-2 px-4">
        POST YOUR AD
      </h2>
      <Form />
    </div>
  );
}
