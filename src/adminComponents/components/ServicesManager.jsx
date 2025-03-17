import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ServicesManager = ({ services, setServices }) => {
  const [newService, setNewService] = useState({ title: "", image: "" });

  const addService = () => {
    if (!newService.title || !newService.image) return;
    setServices([...services, { ...newService, id: Date.now() }]);
    setNewService({ title: "", image: "" });
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Services</h1>
      <div className="flex flex-col sm:flex-row gap-2 w-full mb-4">
        <Input
          type="text"
          placeholder="Service Title"
          className="w-full sm:w-auto"
          value={newService.title}
          onChange={(e) =>
            setNewService({ ...newService, title: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Image URL"
          className="w-full sm:w-auto"
          value={newService.image}
          onChange={(e) =>
            setNewService({ ...newService, image: e.target.value })
          }
        />
        <Button onClick={addService}>Add</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="p-4 relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded"
            />
            <CardContent>
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <Button
                variant="destructive"
                className="mt-2"
                onClick={() => deleteService(service.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesManager;
