import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type LeadInput, type LeadResponse } from "../../shared/routes";
// import { useToast } from "@/hooks/use-toast";
import { useToast } from "./use-toast";
export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: LeadInput) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit form');
      }
      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Received",
        description: "We'll be in touch with you shortly to transform your front desk.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message,
      });
    },
  });
}
