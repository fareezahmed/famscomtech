"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  address: z.string().min(4),
  suburb: z.string().min(2),
  service: z.string().min(2),
  date: z.string().min(2),
  time: z.string().min(2),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof Schema>;

export default function BookForm() {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(Schema) });
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string;

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `New booking from ${data.name}` }),
      });
      if (res.ok) {
        setStatus("ok");
        reset();
      } else {
        setStatus("err");
      }
    } catch (e) {
      setStatus("err");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Full name" {...register("name")} />
      <Input placeholder="Phone" {...register("phone")} />
      <Input placeholder="Email" type="email" {...register("email")} />
      <Input placeholder="Address" {...register("address")} />
      <Input placeholder="Suburb" {...register("suburb")} />
      <Input placeholder="Service (e.g., Wash & Fold)" {...register("service")} />
      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="Date (YYYY-MM-DD)" {...register("date")} />
        <Input placeholder="Time (e.g., 10:30)" {...register("time")} />
      </div>
      <Textarea placeholder="Notes (optional)" {...register("notes")} />
      <Button type="submit" disabled={isSubmitting}>Submit</Button>
      {status === "ok" && <p className="text-green-600">Thanks! We’ve received your booking.</p>}
      {status === "err" && <p className="text-red-600">Sorry, something went wrong. Please try again later.</p>}
    </form>
  );
}