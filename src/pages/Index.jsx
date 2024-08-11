import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Facts</CardTitle>
            <CardDescription>Interesting information about our furry friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cats are one of the most popular pets in the world.</li>
              <li>They have excellent night vision and can see six times better in dim light than humans.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>They have 32 muscles in each ear, allowing for incredible hearing.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known feline varieties</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">Siamese</h3>
                <p>Known for their distinctive coloring and vocal nature.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">Maine Coon</h3>
                <p>Large, friendly cats with long, fluffy coats.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">Persian</h3>
                <p>Recognizable by their flat faces and long, luxurious fur.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">Scottish Fold</h3>
                <p>Characterized by their unique folded ears.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
