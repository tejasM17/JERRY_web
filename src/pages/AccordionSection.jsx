import React from "react";
import {
     Accordion,
     AccordionItem,
     AccordionTrigger,
     AccordionContent,
} from "@/components/ui/accordion";

const AccordionSection = () => {
     return (
          <div className="max-w-3xl mx-auto py-16 px-4">
               <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
               <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                         <AccordionTrigger>How does currency exchange work?</AccordionTrigger>
                         <AccordionContent>
                              We offer real-time exchange rates with no hidden fees. You can send money
                              directly to bank accounts worldwide.
                         </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                         <AccordionTrigger>Is it secure to transfer money?</AccordionTrigger>
                         <AccordionContent>
                              Yes. We use bank-level encryption and global security standards to protect your transactions.
                         </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                         <AccordionTrigger>How long do transfers take?</AccordionTrigger>
                         <AccordionContent>
                              Most transfers are completed instantly or within a few minutes, depending on the destination country.
                         </AccordionContent>
                    </AccordionItem>
               </Accordion>
          </div>
     );
};

export default AccordionSection;