import BookForm from "@/components/forms/BookForm";
import Section from "@/components/common/Section";

export default function BookPage() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold">Book a pickup</h1>
        <p className="text-muted-foreground mt-2">Submit your details—We'll confirm by email/SMS.</p>
        <div className="mt-6">
          <BookForm />
        </div>
      </div>
    </Section>
  );
}