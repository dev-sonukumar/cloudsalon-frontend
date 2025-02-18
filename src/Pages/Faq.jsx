import { useState, useEffect } from "react";
import { api_bisfaqs, api_eprfaqs, api_etafaqs } from "@/utils/api";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faq = () => {
  const [bisFaqs, setBisFaqs] = useState([]);
  const [eprFaqs, setEprFaqs] = useState([]);
  const [etaFaqs, setEtaFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      setError(null);

      try {
        const [bisRes, eprRes, etaRes] = await Promise.all([
          fetch(api_bisfaqs),
          fetch(api_eprfaqs),
          fetch(api_etafaqs),
        ]);

        if (!bisRes.ok || !eprRes.ok || !etaRes.ok) {
          throw new Error(
            `Error fetching FAQs: ${!bisRes.ok ? "BIS " : ""}${
              !eprRes.ok ? "EPR " : ""
            }${!etaRes.ok ? "ETA " : ""}`
          );
        }

        const [bisData, eprData, etaData] = await Promise.all([
          bisRes.json(),
          eprRes.json(),
          etaRes.json(),
        ]);

        setBisFaqs(bisData);
        setEprFaqs(eprData);
        setEtaFaqs(etaData);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const filterFaqs = (faqs) => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  };

  return (
    <div className="container min-h-screen bg-background py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-6">
          Have a question? Search below or browse our FAQs.
        </p>

        {/* Search Input */}
        <div className="mb-6 flex justify-center">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full max-w-md sm:max-w-lg text-sm sm:text-base"
          />
        </div>

        {/* Loading & Error Messages */}
        {loading ? (
          <p className="text-center text-muted-foreground text-lg">
            Loading FAQs...
          </p>
        ) : error ? (
          <p className="text-center text-destructive text-lg">{error}</p>
        ) : (
          <>
            {/* FAQ Sections */}
            {[
              { title: "BIS FAQs", data: filterFaqs(bisFaqs) },
              { title: "EPR FAQs", data: filterFaqs(eprFaqs) },
              { title: "ETA FAQs", data: filterFaqs(etaFaqs) },
            ].map(
              (section, idx) =>
                section.data.length > 0 && (
                  <div key={idx} className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
                      {section.title}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {section.data.map((faq, index) => (
                        <AccordionItem
                          key={faq._id || index}
                          value={String(index)}
                        >
                          <AccordionTrigger className="text-base sm:text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <Card className="bg-card shadow-lg">
                              <CardContent className="p-4 text-foreground text-sm sm:text-base leading-relaxed">
                                {faq.answer}
                              </CardContent>
                            </Card>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )
            )}

            {/* No results message */}
            {filterFaqs(bisFaqs).length === 0 &&
              filterFaqs(eprFaqs).length === 0 &&
              filterFaqs(etaFaqs).length === 0 && (
                <p className="text-center text-muted-foreground text-lg">
                  No FAQs found. Try a different search term.
                </p>
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default Faq;
