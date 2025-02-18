import { useState, useEffect } from "react";
import axios from "axios";

import { api_bisfaqs } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "sonner";

const BisFaqManager = () => {
  const [faqs, setFaqs] = useState([]); // Ensuring it's an array
  const [loading, setLoading] = useState(false);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [editingFAQ, setEditingFAQ] = useState(null);
  const [open, setOpen] = useState(false); // Modal control

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(api_bisfaqs);
      console.log("API Response:", res.data); // Debugging output

      const data = res.data;

      // Ensure `faqs` is always an array
      setFaqs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
      toast.error("Failed to load FAQs");
      setFaqs([]); // Prevent mapping over `undefined`
    } finally {
      setLoading(false);
    }
  };

  const handleAddFAQ = async (e) => {
    e.preventDefault();
    if (!newFAQ.question.trim() || !newFAQ.answer.trim()) {
      toast.error("Question and Answer are required.");
      return;
    }

    try {
      const res = await axios.post(api_bisfaqs, newFAQ);
      setFaqs((prevFaqs) => [...prevFaqs, res.data]); // Avoid direct state mutation
      toast.success("FAQ added successfully!");
      setNewFAQ({ question: "", answer: "" });
      setOpen(false);
    } catch (err) {
      console.error("Error adding FAQ:", err);
      toast.error("Failed to add FAQ");
    }
  };

  const handleEditFAQ = async (e) => {
    e.preventDefault();
    if (!editingFAQ?._id) return;

    try {
      const response = await axios.put(`${api_bisfaqs}/${editingFAQ._id}`, {
        question: editingFAQ.question,
        answer: editingFAQ.answer,
      });
      setFaqs((prevFaqs) =>
        prevFaqs.map((faq) =>
          faq._id === editingFAQ._id ? response.data : faq
        )
      );
      toast.success("FAQ updated successfully!");
      setEditingFAQ(null);
      setOpen(false);
    } catch (err) {
      console.error("Error updating FAQ:", err);
      toast.error("Failed to update FAQ");
    }
  };

  const handleDeleteFAQ = async (id) => {
    if (!id || !window.confirm("Are you sure you want to delete this FAQ?"))
      return;
    try {
      await axios.delete(`${api_bisfaqs}/${id}`);
      setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq._id !== id)); // Avoid direct mutation
      toast.success("FAQ deleted successfully!");
    } catch (err) {
      console.error("Error deleting FAQ:", err);
      toast.error("Failed to delete FAQ");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      <Toaster />
      <Card>
        <CardHeader>
          <CardTitle>FAQ Manager</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add FAQ Button */}
          <Dialog
            open={open}
            onOpenChange={(isOpen) => {
              if (!isOpen) setEditingFAQ(null); // Reset edit state when modal closes
              setOpen(isOpen);
            }}
          >
            <DialogTrigger asChild>
              <Button className="mb-4">
                <PlusCircle className="mr-2" size={18} />
                {editingFAQ ? "Edit FAQ" : "Add FAQ"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingFAQ ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={editingFAQ ? handleEditFAQ : handleAddFAQ}
                className="space-y-4"
              >
                <Input
                  type="text"
                  placeholder="Enter question..."
                  value={editingFAQ ? editingFAQ.question : newFAQ.question}
                  onChange={(e) =>
                    editingFAQ
                      ? setEditingFAQ((prev) => ({
                          ...prev,
                          question: e.target.value,
                        }))
                      : setNewFAQ((prev) => ({
                          ...prev,
                          question: e.target.value,
                        }))
                  }
                  required
                />
                <Textarea
                  placeholder="Enter answer..."
                  value={editingFAQ ? editingFAQ.answer : newFAQ.answer}
                  onChange={(e) =>
                    editingFAQ
                      ? setEditingFAQ((prev) => ({
                          ...prev,
                          answer: e.target.value,
                        }))
                      : setNewFAQ((prev) => ({
                          ...prev,
                          answer: e.target.value,
                        }))
                  }
                  required
                />
                <Button type="submit" className="w-full">
                  {editingFAQ ? "Update FAQ" : "Add FAQ"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* FAQ List */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Existing FAQs</h3>
            {loading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="animate-spin" size={32} />
              </div>
            ) : Array.isArray(faqs) && faqs.length > 0 ? (
              <ul className="space-y-4">
                {faqs.map((faq) => (
                  <Card
                    key={faq._id}
                    className="p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{faq.question}</p>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEditingFAQ(faq);
                          setOpen(true);
                        }}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDeleteFAQ(faq._id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No FAQs found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BisFaqManager;
