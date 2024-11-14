import Image from "next/image";
import PreAuthNav from "./0components/ui-components/pre-auth/PreAuthNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <PreAuthNav/>
      
      <div className="bg-white text-gray-500 p-12 border border-gray-200 shadow rounded-lg">
      <p className="text-3xl">Esto tendría que ser un formulario de login</p>

      </div>
    </div>
  );
}
